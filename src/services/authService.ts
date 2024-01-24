import http from "./httpServices";
import {apiUrl} from "../config.json"
import  {jwtDecode}  from "jwt-decode";

const apiEndpoint = apiUrl + "/auth/login"

export async function login(username:string , password:string){
    const bodyOfReq = {
        username,
        password
    }
    const {data} = await http.post(apiEndpoint,bodyOfReq);
    const jwt = data.token;
    localStorage.setItem("token", jwt);
     
}
export function logout(){
    localStorage.removeItem('token');
}
export function getCurrentUser(){
    try {
        let jwt = localStorage.getItem("token");
        jwt = jwt?jwt:''
        return jwtDecode(jwt) ;

      } catch (error) {
        return new Object();
      }
}


export default {
    login,
    logout,
    getCurrentUser
}