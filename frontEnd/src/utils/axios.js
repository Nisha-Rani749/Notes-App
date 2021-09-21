import axios from "axios";

const instance=axios.create({
    baseURL:"http://localhost:5000",
    //optional
    headers:{ContentType:"application/json"},
});

export default instance;