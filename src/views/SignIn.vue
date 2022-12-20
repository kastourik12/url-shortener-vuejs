<template class="form-body">
  <form @submit.prevent="login" >
    <div class="card group ">
      <div class="card-header">
        <h1 class="">SignIn</h1>
      </div>
      <div class="card-body">
        <div class="flex flex-col text-left">
          <div class="input-field ">
            <label >Username</label>
            <input type="text"  v-model="signInRequest.username" required >
          </div>
          <div class="input-field ">
            <label>Password</label>
            <input type="password"  v-model="signInRequest.password" required >
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <button class="button" type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import {AuthStore} from "@/store";
import {inject, reactive} from "vue";
import authService from "@/services/auth.service";
import router from "@/router";
const authStore = AuthStore()
const toast = inject("toast")

const signInRequest = reactive({
  username:'',
  password:'',
});

const login =  () => {
  authService.signIn(signInRequest)
      .then((response) => {
        const user = response.data
        authStore.saveUser(user)
        toast.show("welcome back mr " + user.username +"!",{type:"success"})
        location.reload()
        router.push('/about')
      })
      .catch((error) => toast.show(error.response.data,{type:"error"}))
}

</script>

<style scoped>

</style>
