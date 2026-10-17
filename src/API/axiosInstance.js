import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

//Global error handling

instance.interceptors.response.use((response)=>{
    console.log("API RESPONSE RECEIVED");
    return response
},
(error)=>{
    if(error.response){
        const status=error.response.status         
        if(status==401){
            console.log("Unauthorized Access");
            
        }
        else if(status==404){
            console.log("API not found");
            
        }
         else if(status==500){
            console.log("something went wrong");
            
        }
         else if(error.request){
            console.log("no response from the server");
            
        }
        else{
            console.log("Error"+error.message);
            
        }
        return Promise.reject(error)
    }
}
)

export default instance