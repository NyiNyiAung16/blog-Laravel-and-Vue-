<template>
    <h1 class="block text-center text-4xl sm:text-6xl leading-10 font-extrabold tracking-light text-gray-900">
        {{ post.title }}
    </h1>
    <p class="mt-16 text-gray-500 prose prose-sm lg:prose" v-html="post.teaser"></p>
</template>

<script setup>
import { onMounted } from 'vue';
import usePosts from '../api/usePosts.js'
const props = defineProps({
    slug:{
        requried:true,
        type:String
    }
});

const { post, fetchPost } = usePosts();
onMounted(() => fetchPost(props.slug))


</script>

<style scoped>

</style>