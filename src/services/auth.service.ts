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