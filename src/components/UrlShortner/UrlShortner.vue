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
import {reactive, ref} from "vue";
import {toast} from "@/services/toaster";
const shortUrlCreationRequest = reactive({
  url:''
});

let shortUrl = reactive({
  url:'',
  visitedTimes:'',
  shortenedTimes:''
})

const shortened = ref(false)
const  createShortUrl= () =>{
    shortUrlService.createShortUrl(shortUrlCreationRequest).then( (res) =>{
        shortened.value = true
        toast.show(res.data.url,{
          type: "success",
          onClick: () =>{ navigator.clipboard.writeText(res.data.url)
            toast.success("link copied to clipboard")}
        })
    }).catch(e => toast.error(e.response.data))}
</script>

<style scoped>

</style>