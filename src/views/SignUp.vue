<template>
  <div class=""></div>
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
      </div>
    </div>
    <div class="card-footer ">
      <button type="submit">Submit</button>
    </div>
  </div>
  </form>
</template>

<script setup>
import {inject, reactive} from "vue";
import authService from "@/services/auth.service";

const  signUPRequest = reactive({
  username:'',
  password:'',
})
const toast = inject("toast")
function submitSignUp(){
  authService.signUp(signUPRequest)
      .then((res) => toast.show(res.data,{type:"success"}))
      .catch((e) =>toast.show(e.response.data,{type:"error"}))
}
function onMounted(){

}

</script>

<style scoped>

</style>
