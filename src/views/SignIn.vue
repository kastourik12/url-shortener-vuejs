<template>
  <div class=""></div>
  <form @submit.prevent="submitSignIn">
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
          <div class="input-field">
            <label>Password</label>
            <input type="password"  v-model="signInRequest.password" required >
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import AuthAPI from "@/services/AuthAPI";
import {reactive} from "vue";

export default {
  name: "SignIn",
  data(){
    const signInRequest = reactive({
      username:'',
      password:'',
    });
    return {
      signInRequest
    }
  },
  methods:{
    submitSignIn(){
      AuthAPI.signIn(this.signInRequest).then(
          res => {
            this.$toast.info("Logged in successfully,welcome back Mr" + res.data.username)
            localStorage.setItem('token',res.data.accessToken)
          }).catch(
          err => this.$toast.error(err.response.data)
      )
    }
  }
}
</script>

<style scoped>

</style>
