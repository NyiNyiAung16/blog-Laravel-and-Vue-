<template>
    <div>
        <ResizeTextarea v-if="post.title">
            <template v-slot:default="{ resize, el }">
                <textarea :ref="el" v-model="post.title" @input="resize" class="w-full text-center text-4xl lg:text-6xl leading-10 font-extrabold tracking-light text-gray-900 border-0 resize-none focus:ring-0 p-0"></textarea>
            </template>
        </ResizeTextarea>
    </div>
</template>

<script setup>
import ResizeTextarea from '../../components/ResizeTextarea.vue'
import { onMounted, watch } from 'vue';
import _ from 'lodash'
import useAdminPosts from '../../api/admin/useAdminPosts'


const props = defineProps({
    'slug':{
        required:true,
        type:String
    }
});

const { post, fetchPost, patchPost } = useAdminPosts();

const updatePost = async() => {
    await patchPost(post.value.uuid);
}

onMounted(async()=>{
    await fetchPost(props.slug);

    watch(() => _.cloneDeep(post),_.debounce(() => {
        updatePost()
    },500))
});




</script>

<style scoped>

</style>