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
      <div class="input-field">
        <label>Email</label>
        <input type="text"  @keyup.enter="submitSignUp" v-model="signUPRequest.email" required >
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
export default {
  name: "SignUp",
  data(){
    return {
      signUPRequest:{
        username:'',
        password:'',
        email:'',
      }
    }
  },
  methods:{
    submitSignUp(event){

    }
  }
}
</script>

<style scoped>

</style>
