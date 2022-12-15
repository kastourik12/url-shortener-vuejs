<template>
  <form @submit.prevent="createShortUrl">
  <div class="card group">
    <div class="card-header">
      <h1 class="">Create a Short url</h1>
    </div>
    <div class="card-body">
      <div class="flex flex-col text-left">
        <div class="input-field w-64 ">
          <label ></label>
          <input type="text" v-model="shortUrlCreationRequest.url" required placeholder="Put your url here">
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full h-12 pt-16 cursor-pointer">
        <label ></label>
        <button class="button w-48" type="submit">Submit</button>
      </div>
    </div>
    <div class="card-footer">
      <span v-if="shortUrl" class="text-white">
        {{shortUrl.url}}
      </span>
    </div>
  </div>


  </form>
</template>

<script setup>
import shortUrlService from "@/services/short-url.service";
import {inject, reactive, ref} from "vue";
const shortUrlCreationRequest = reactive({
  url:''
});
const toast = inject("toast")
let shortUrl = reactive({
  url:'',
  visitedTimes:'',
  shortenedTimes:''
})

const shortened = ref(false)
const  createShortUrl= () =>{
    shortUrlService.createShortUrl(shortUrlCreationRequest).then( (res) =>{
        shortened.value = true
        toast.show("created " + res.data.url, {
          type:"info",
          duration:false,
          queue: true,
          onClick: () =>{
            navigator.clipboard.writeText(res.data.url)
            toast.show("link copied to clipboard",{type:"success"})
          }
        })
        shortUrl = res.data
      console.log(shortUrl)
        }
    ).catch((e) => {
      toast.show(e.response.data,{type:"error"})
    })
  }
</script>

<style scoped>

</style>