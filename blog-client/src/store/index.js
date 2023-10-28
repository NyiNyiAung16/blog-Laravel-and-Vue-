import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
    state(){
        return {
            authenticated:false,
            user:null
        }
    },
    getters:{
        authenticated(state){
            return state.authenticated;
        },
        user(state){
            return state.user;
        }
    },
    actions:{
        async login(_,credientials){
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login',credientials);
        }
    }
})