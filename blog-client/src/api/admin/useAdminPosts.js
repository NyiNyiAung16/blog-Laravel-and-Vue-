import { ref } from 'vue'
import axios from 'axios';

export default function usePosts() {
    const posts = ref([]);
    const post = ref([]);

    const fetchPosts = async()=>{
        const response = await axios.get("/api/admin/posts");
        posts.value = response.data.data;
    }

    const fetchPost = async(slug)=>{
        const response = await axios.get(`/api/admin/posts/${slug}/edit`);
        post.value = response.data.data;
    }

    const createPost = async() => {
       let response =  await axios.post('/api/admin/store');
       return response.data.data;
    }

    const patchPost = async(uuid) => {
       await axios.patch(`/api/admin/posts/${uuid}/update`,post.value);
    }

    return {
        posts,
        post,
        createPost,
        fetchPosts,
        fetchPost,
        patchPost
    }
}