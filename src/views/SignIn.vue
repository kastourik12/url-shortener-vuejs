<template>

    <div class="card group">
      <div class="card-header">
        <h1 class="text-primary">SignIn</h1>
      </div>
      <div class="card-body text-left">
        <form class="flex flex-col text-left">
          <div class="input-field ">
            <label >Username</label>
            <input type="text"  required >
          </div>
          <div class="input-field">
            <label>Password</label>
            <input type="password"  required >
          </div>
        </form>
      </div>
      <div class="card-footer ">
        <button class="group-hover:text-accent-2 group-hover:bg-secondary">Submit</button>
      </div>
    </div>

</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>
