import axios from "axios";


const instance=axios.create({
    headers:{
        'Content-Type':'application/json'
    },
    baseURL:'http://localhost:9999/auth'
})


export default instance;