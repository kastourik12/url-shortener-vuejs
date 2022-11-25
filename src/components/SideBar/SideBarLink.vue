<template>
<div className="sidebar-link group">
<router-link :to="link.href">
  <i :class="link.icon"> </i>
  <span className="sidebar-tooltip group-hover:scale-100"> {{link.name}} </span>
  </router-link>
</div>
</template>

<script>
import {Link} from "@/components/SideBar/link";

export default {
  name: "SideBarLink",

  props: {
    link: {
      type: Link,
      required: true
    }
  }
}
</script>

<style >

</style>
