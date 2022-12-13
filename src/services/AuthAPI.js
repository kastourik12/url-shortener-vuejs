import axios from "axios";


export default {
    signIn({username,password}) {
        return axios.post("/auth/sign-in",{username,password})
    },
    signUp({username,password}) {
        return axios.post("/auth/sign-up",{username,password})
    }
}
