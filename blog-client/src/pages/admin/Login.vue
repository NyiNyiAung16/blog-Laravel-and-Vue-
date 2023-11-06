<template>
    <section class="flex justify-center items-center">
        <div class="w-full max-w-xl">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="attemptLogin">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="email" type="email" placeholder="Enter your email..." autocomplete="off" v-model="form.email">
                    <p class="text-red-500 text-md" v-if="errors.email">{{errors.email[0]}}</p>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password..." v-model="form.password">
                    <p class="text-red-500 text-md" v-if="errors.password">{{errors.password[0]}}</p>
                </div>
                <div class="flex ">
                    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const errors = ref({});

const form = reactive({
    email:'',
    password:''
});

const store = useStore();
const router = useRouter();

const attemptLogin = () => {
    store.dispatch('login',form)
    .then(()=>{
        form.email = '';
        form.password = '';
        router.replace({name:'admin.posts'});
    })
    .catch((e)=>{
        errors.value = e.response.data.errors;
    })
}

</script>
