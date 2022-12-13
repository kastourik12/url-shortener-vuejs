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

<script>
import AuthAPI from "@/services/AuthAPI";
import {reactive} from "vue";

export default {
  name: "SignUp",
  data(){
    const  signUPRequest = reactive({
      username:'',
      password:'',
    })
    return {
      signUPRequest
    }
  },
  methods:{
    submitSignUp(){
      AuthAPI.signUp(this.signUPRequest).then(
          res => {
            this.$toast.info(res.data)
            this.$router.push('/signIn')
          }
      ).catch(
          err => this.$toast.error(err.response.data)
      )
    }
  }
}
</script>

<style scoped>

</style>
