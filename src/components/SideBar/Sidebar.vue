<template>
  <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-secondary shadow-lg justify-between">
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
export default {
  name: "Sidebar",
  components: {SideBarLink},
  data(){
    return{
      links1: [
        {name: "Home", icon: "fa-solid fa-house", href: "/"},
        {name: "Services", icon: "fa fa-cogs", href: "/services"},
        {name: "Sign In", icon: "fa-solid fa-arrow-right-to-bracket", href: "/signIn"},
        {name: "Sign Up", icon: "fa-solid fa-user-plus", href: "/signUp"},
      ],
      links2: [
        {name: "About", icon: "fa-solid fa-circle-question", href: "/about"}
      ]

    }

  }
}
</script>

<style scoped>

</style>
