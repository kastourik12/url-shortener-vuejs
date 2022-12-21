<template>

</template>

<script setup>
import shortUrlService from "@/services/short-url.service";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {toast} from "@/services/toaster";
const route = useRoute()

onMounted(  () =>{
    shortUrlService.getRedirectionUrl(route.path).then((res)=>{
      toast.success("redirecting to " + res.data.url)
      toast.success("visited times : "+ res.data.visitedTimes)
      setTimeout(() => window.location.replace(res.data.url),
      3000)
    }
   )
} )


</script>

<style scoped>

</style>