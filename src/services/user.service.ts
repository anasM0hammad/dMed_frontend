import axios from "axios";
import { getStoreData } from "../redux/store";

const BASE_URL = 'http://localhost:8000';

const getHeaders = () => {
    const storeData: any = getStoreData();
    const token = `Bearer ${storeData.auth.accessToken}`;
    const role = storeData.auth.role;
    const address = storeData.auth.address;

    return {
        Authorization: token,
        'x-role': role,
        'x-address': address
    };
}

const getPatient = (patientId: string) => {
    const url = `${BASE_URL}/api/get-patient`;
    const headers = Object.assign({ 'x-patient-id': patientId }, getHeaders());
    try{
        return axios.get(url, {
            headers
        });
    }
    catch(error){
        throw Error('getPatient failed with server error');
    }
}

export { getPatient };