import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(/*success*/ null,error => { 
    const expectedError = error.response && error.response.status >= 400 && error.response.status <= 500;
    if(!expectedError){
      console.log('Login the erros' , error);
      toast.error('An Unexpected Error Occurred')
    }
  
  
    return Promise.reject(error);
  }  )
export default {
    get:axios.get,
    put:axios.put,
    post:axios.post,
    delete:axios.delete
}