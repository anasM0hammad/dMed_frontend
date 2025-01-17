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

const getPrescription = () => {
    const url = `${BASE_URL}/api/get-prescription`;
    const headers = Object.assign({}, getHeaders());
    try{
        return axios.get(url, {
            headers
        });
    }
    catch(error){
        throw Error('getPrescription failed with server error');
    }
}

const updatePrescription = (data: any) => {
    const prescriptionId = data.prescriptionId;
    const headers = Object.assign({'x-prescription-id': prescriptionId}, getHeaders());
    const url = `${BASE_URL}/api/update-prescription`;
    try{
        return axios.put(url, data, {
            headers
        });
    }
    catch(error){
        throw Error('updatePrescription failed');
    }
}

const createPrescription = (data: any) => {
    const headers = Object.assign({}, getHeaders());
    const url = `${BASE_URL}/api/create-prescription`;
    try{
        return axios.post(url, data, {
            headers
        });
    }
    catch(error){
        throw Error('createPrescription failed');
    }
}

export { getPrescription, updatePrescription, createPrescription };