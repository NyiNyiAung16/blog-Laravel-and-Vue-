import { ref } from 'vue'
import axios from 'axios';

export default function usePosts() {
    const posts = ref([]);

    const fetchPosts = async()=>{
        const response = await axios.get("/api/admin/posts");
        posts.value = response.data.data;
    }

    return {
        posts,
        fetchPosts
    }
}