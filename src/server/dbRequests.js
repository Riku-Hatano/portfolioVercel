import axios from "axios";

const axiosObj = axios.create({
    baseURL: "http://localhost:8089/server"
})

class dbRequests {
    get(pathName) {
        return axiosObj.get(pathName);
    }
}

export default new dbRequests();