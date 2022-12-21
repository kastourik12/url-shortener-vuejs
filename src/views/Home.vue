<template>
  <div class="home-body">
  <div class="body-left-col">
    <UrlShortner/>
  </div>
  <div class="body-right-col">
    <p class="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio, dolor eius error facere
    facilis laboriosam modi neque nobis nostrum quae repudiandae,
    sapiente sequi sint tempora tenetur ut voluptatibus.
    </p>
  </div>
  </div>
</template>

<script>

import Sidebar from "@/App";
import UrlShortner from "@/components/UrlShortner/UrlShortner.vue";
export default {
  name: "Home",
  components: {
    UrlShortner,
    Sidebar
  }
}
</script>

<style scoped>

</style>
