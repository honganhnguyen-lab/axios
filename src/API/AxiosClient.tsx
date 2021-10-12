import axios from  "axios";
import queryString from "query-string" //npm install query-string

const axiosClient = axios.create(
    {
        baseURL: "http://localhost:8081",
        headers : {
            "Content-Type": "application/json; charset=utf-8"
        },
        paramsSerializer : param => queryString.stringify(param),
    }
);
axiosClient.interceptors.request.use( async (config)=>{

    return config;
});
axiosClient.interceptors.request.use((response)=>{
    if(response && response.data){
        return response;
    }
    return response;
    
},
function(error) {
    return Promise.reject(error);
  });

export default axiosClient
