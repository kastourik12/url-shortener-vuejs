import axios from "axios";

export default {
    async createShortUrl(url){
        return await axios.post("/re/create",url)
    },
     getRedirectionUrl(path){
      return axios.get(path)
    }
}