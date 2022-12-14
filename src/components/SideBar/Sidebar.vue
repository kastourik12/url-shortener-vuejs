<template>

    <div class="sidebar">
    <div class="">
    <SideBarLink v-for="link in links1" :key="link.name" :link="link" />
    </div>
   <div class="">
    <SideBarLink v-for="link in links2" :key="link.name" :link="link" />
    </div>
    </div>

  </template>

<script>
import SideBarLink from "@/components/SideBar/SideBarLink";
import {Link} from "@/components/SideBar/link";
export default {
  name: "Sidebar",
  components: {SideBarLink},
  data(){
    return{
      links1: [
        {name: "Home", icon: "fa-solid fa-house", href: "/"},
        {name: "Services", icon: "fa fa-cogs", href: "/services"},
        {name: "Sign In", icon: "fa-solid fa-arrow-right-to-bracket", href: "/signIn"},
        {name: "Sign Up", icon: "fa-solid fa-user-plus", href: "/signUp"}
      ],
      links2:[
        {name: "About", icon: "fa-solid fa-circle-question", href: "/about"}
      ],
    }
  },
  methods: {
    toggleSideBar(){
    }
  }
}
</script>

<style scoped>

</style>
