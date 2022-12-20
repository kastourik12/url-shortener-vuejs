<template>

</template>

<script setup>
import shortUrlService from "@/services/short-url.service";
import {inject, onMounted} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const toast = inject("toast")

onMounted(  () =>{
    shortUrlService.getRedirectionUrl(route.path).then((res)=>{
      toast.show("redirecting to " + res.data.url)
      toast.show("visited times : "+ res.data.visitedTimes)
      setTimeout(() => window.location.replace(res.data.url),
      1000)
    }
   )
} )


</script>

<style scoped>

</style>