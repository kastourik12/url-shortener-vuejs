import { defineStore } from 'pinia';


export const AuthStore = defineStore({
    id:'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
    }),
    getters:{
        isLoggedIn() {
            return !!this.user;
        }
    },
    actions: {
        saveUser(user){
            this.user = user
            console.info(user)
            localStorage.setItem('user',JSON.stringify(user))
        },
        logOut(){
            localStorage.clear()
            this.user = null
        }
    }
})