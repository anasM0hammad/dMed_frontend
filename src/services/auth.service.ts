import axios from "axios";

const BASE_URL = 'http://localhost:8000';

export const signup = (body: any) => {
    const url = `${BASE_URL}/auth/signup`;
    try{
        return axios.post(url, body, {
            headers: {}
        });
    }
    catch(err: any){
        throw Error('signup failed with server error');
    }
}

export const getNonce = async (address: string) => {
    const headers = { 'x-address': address };
    const url = `${BASE_URL}/auth/get-nonce`;

   try{
        const response = await axios.get(url, {
            headers
        });

        const data = response.data;
        return data.nonce;
   }
   catch(err){
        throw Error('signup failed with server error');
   }

}

export const login = async (address: string, signature: any) => {
    const body = {
        address,
        signature
    };
    const url = `${BASE_URL}/auth/login`;
    
    try{
        const response = await axios.post(url, body, {
            headers: {},
        });
        const data = response.data;
        return data;
    }
    catch(error){
        throw Error('login failed with server errro');
    }
}