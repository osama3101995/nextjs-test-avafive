
import axios from 'axios';

const sendRequest = (encodedParams : string = '')=> {
    return new Promise((resolve, reject) => { 

        axios.get('https://dummyjson.com' + encodedParams)
        .then(response => {
            resolve(response.data);  
        })
        .catch(error => {
            reject(error);
        });
    
     })
}


export const getProducts = () => {
   return sendRequest('/products');
}


export const getProduct = (itemid : number) => {
    return sendRequest(`/products/${itemid}`);
 }

 export const getCart = () => {
     return sendRequest(`/carts/user/5`);
  }