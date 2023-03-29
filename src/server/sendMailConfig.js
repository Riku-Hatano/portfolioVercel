import axios from "axios";

const axiosObj = axios.create({
    baseURL: "http://localhost:8090/sendMail"
})

export default axiosObj;