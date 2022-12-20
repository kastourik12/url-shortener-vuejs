import axios from "axios";


export default {
    async signIn({username,password}) {
         return await axios.post("/auth/sign-in",{username,password})
    },

    async signUp({username,password}) {
        return  await axios.post("/auth/sign-up", {username, password})
    },
    logout(){
        localStorage.clear()
    }
}
