import Contract from './build/NFT.json';
import { getWeb3 } from '../services/web3.services';

const getContract = () => {
    const web3 = getWeb3();
    console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
    const contract = new web3.eth.Contract(Contract.abi, process.env.REACT_APP_CONTRACT_ADDRESS);
    return contract;
}

const generatePrescription = async (tokenURI: string, cost: number, patient: string) => {
    const web3 = getWeb3();
    let accounts = await web3.eth.getAccounts();

    try{
        if(!accounts){
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
    
            if(accounts.length === 0){
                throw Error('no account found');
            }
        }

        const account = accounts[0];
        const contract = getContract();
        const tokenId = await contract.methods.generatePrescription(tokenURI, cost, patient).send({from: account});
        return tokenId;
    }
    catch(error: any){
        if(error.code === 4001){
            throw Error('Please connect to wallet')
        }
        throw Error('error in accessing account');
    }

}

const buyNFT = async (tokenId: number, cost: string) => {
    const web3 = getWeb3();
    let accounts = await web3.eth.getAccounts();

    try{
        if(!accounts){
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
    
            if(accounts.length === 0){
                throw Error('no account found');
            }
        }

        const account = accounts[0];
        const contract = getContract();
        await contract.methods.transferPrescription(tokenId).send({from: account, value: cost});
    }
    catch(error: any){
        if(error.code === 4001){
            throw Error('Please connect to wallet')
        }
        throw Error('error in accessing account');
    }
}

const costOf = async (tokenId: number) => {
    const web3 = getWeb3();
    let accounts = await web3.eth.getAccounts();

    try{
        if(!accounts){
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
    
            if(accounts.length === 0){
                throw Error('no account found');
            }
        }

        const account = accounts[0];
        const contract = getContract();
        const cost = await contract.methods.costOf(tokenId).call();
        return cost;
    }
    catch(error: any){
        if(error.code === 4001){
            throw Error('Please connect to wallet')
        }
        throw Error('error in accessing account');
    }
}

const tokenURIOf = async (tokenId: number) => {
    const web3 = getWeb3();
    let accounts = await web3.eth.getAccounts();

    try{
        if(!accounts){
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
    
            if(accounts.length === 0){
                throw Error('no account found');
            }
        }

        const account = accounts[0];
        const contract = getContract();
        const tokenURI = await contract.methods.tokenURI(tokenId).call();
        return tokenURI;
    }
    catch(error: any){
        if(error.code === 4001){
            throw Error('Please connect to wallet')
        }
        throw Error('error in accessing account');
    }
}

const patientOf = async (tokenId: number) => {
    const web3 = getWeb3();
    let accounts = await web3.eth.getAccounts();

    try{
        if(!accounts){
            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
    
            if(accounts.length === 0){
                throw Error('no account found');
            }
        }

        const account = accounts[0];
        const contract = getContract();
        const patient = await contract.methods.patientOf(tokenId).call();
        return patient;
    }
    catch(error: any){
        if(error.code === 4001){
            throw Error('Please connect to wallet')
        }
        throw Error('error in accessing account');
    }
}



export { getContract, generatePrescription, buyNFT, costOf, patientOf, tokenURIOf };
