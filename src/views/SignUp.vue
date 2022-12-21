<template>
  <form @submit.prevent="submitSignUp">
  <div class="card group ">
    <div class="card-header">
      <h1 class="">SignUp</h1>
    </div>
    <div class="card-body">
      <div class="flex flex-col text-left">
        <div class="input-field ">
        <label >Username</label>
        <input type="text"  v-model="signUPRequest.username" required >
      </div>
      <div class="input-field">
        <label>Password</label>
        <input type="password"  v-model="signUPRequest.password" required >
      </div>
      <div class="input-field">
        <label>Email</label>
        <input type="email"  v-model="signUPRequest.email" required >
      </div>
      <div class="input-field">
        <label>Full Name</label>
        <input type="tel"  v-model="signUPRequest.fullName" required >
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
import {inject, reactive} from "vue";
import authService from "@/services/auth.service";
import {toast} from "@/services/toaster";

const  signUPRequest = reactive({
  username:'',
  password:'',
  email:'',
  fullName:''
})

function submitSignUp(){
  authService.signUp(signUPRequest)
      .then((res) => toast.success(res.data,{type:"success"}))
      .catch((e) =>toast.warning(e.response.data,{type:"error"}))
}

</script>

<style scoped>

</style>
