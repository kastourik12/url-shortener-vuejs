import axios from "axios";

export default {
    async createShortUrl(url){
        return await axios.post("/re/create",url)
    }
}