<template>
    <form @submit.prevent="login">
        <button type="submit">Login</button>
    </form>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();
const login = () => {
    store.dispatch('login',{
        email:'nyinyi@gamil.com',
        password:'ilovedog'
    });
}

</script>
