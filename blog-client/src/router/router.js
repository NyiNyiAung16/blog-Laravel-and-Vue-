import { createRouter, createWebHistory  } from 'vue-router'

import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'
import Login from '../pages/admin/Login.vue'
import Posts from '../pages/admin/Posts.vue'
import Edit from '../pages/admin/Edit.vue'

import store from '../store'

const routes = [

    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/posts/:slug',
        name:'post',
        component:Post,
        props:true
    },
    {
        path:'/admin/login',
        name:'admin.login',
        component:Login,
        beforeEnter(to,from,next){
            if(store.getters.authenticated){
                return next({name:'admin.posts'});
            }
            return next();
        }
    },
    {
        path:'/admin/posts',
        name:'admin.posts',
        component:Posts,
        beforeEnter(to,from,next){
            if(!store.getters.authenticated){
                return next({name:'admin.login'});
            }
            return next();
        }
    },
    {
        path:'/admin/posts/:slug/edit',
        name:'admin.posts.edit',
        component:Edit,
        props:true,
        beforeEnter(to,from,next){
            if(!store.getters.authenticated){
                return next({name:'admin.login'});
            }
            return next();
        }
    }

];  



export default createRouter({
    history:createWebHistory(),
    routes
});