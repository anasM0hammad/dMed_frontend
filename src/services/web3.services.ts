import { Web3 } from 'web3';

export const getWeb3 = () => {
    if(window.ethereum){
        return new Web3(window.ethereum);
    }
    throw Error('web3 provider in not available');
}

export const requestAddress = () => {
    if(window.ethereum){
        
    }
}