<template>
<div className="sidebar-link group">
<router-link :to=" props.link.href" >
  <i :class="props.link.icon" > </i>
  <span className="sidebar-tooltip group-hover:scale-100"> {{props.link.name}} </span>
  </router-link>
</div>
</template>

<script setup>
const props = defineProps(['link'])


</script>

<style >

</style>
