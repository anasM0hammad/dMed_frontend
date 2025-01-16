import Contract from './build/NFT.json';
import { getWeb3 } from '../services/web3.services';

const getContract = () => {
    const web3 = getWeb3();
    console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
    const contract = new web3.eth.Contract(Contract.abi, process.env.REACT_APP_CONTRACT_ADDRESS);
    return contract;
}

export { getContract };
