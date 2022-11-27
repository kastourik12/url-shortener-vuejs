<template>
  <div class="flex body">
    <Sidebar />
    <router-view />
  </div>
</template>

<style>
.body{
  @apply p-0 m-0 bg-accent;
}
</style>
<script>
import Sidebar from "@/components/SideBar/Sidebar";
export default {
  components: {Sidebar}
}
</script>
