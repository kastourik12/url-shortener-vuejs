import axios from "axios";


class AuthService {
    signIn({username,password}) {
        return axios.post("/auth/sign-in",{username,password})
            .then( res => {
                localStorage.setItem('user',JSON.stringify(res.data))
                return res.data
            }
        )
    }
    signUp({username,password}) {
        return axios.post("/auth/sign-up",{username,password})
    }
    logout() {
        localStorage.removeItem('user');
    }
}
export default new AuthService();
