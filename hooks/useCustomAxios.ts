import axios from "axios"

const CustomAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF": 1
    }
    //withCredentials: true
})

const useCustomAxios = () => CustomAxios

export default useCustomAxios