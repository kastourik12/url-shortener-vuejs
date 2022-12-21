<template v-cloak>

    <div class="sidebar">
    <div class="">
    <SideBarLink v-for="link in links1.filter(l => l.visible)" :key="link.name"  :link="link" />
    </div>
   <div class="">
    <SideBarLink  :key="lastLink.name" :link="lastLink" />
    </div>
    </div>

  </template>

<script setup>
import SideBarLink from "@/components/SideBar/SideBarLink.vue";
import {AuthStore} from "@/store";
import {ref} from "vue";


  const authStore = AuthStore()

  const isNotLoggedIn = ref(!authStore.isLoggedIn);

  const links1= [{name: "Home", icon: "fa-solid fa-house", href: "/",visible:true},
  {name: "Services", icon: "fa fa-cogs", href: "/services",visible:true},
  {name: "Sign In", icon: "fa-solid fa-arrow-right-to-bracket", href: "/signIn",visible:isNotLoggedIn.value},
  {name: "Sign Up", icon: "fa-solid fa-user-plus", href: "/signUp",visible:isNotLoggedIn.value}]

  const lastLink= {name: "About", icon: "fa-solid fa-circle-question", href: "/about",visible:true}



</script>

<style scoped>

</style>
