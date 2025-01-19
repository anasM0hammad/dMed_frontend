# DMed
## EHR on Web3 using Ethereum Blockchain

## Overview
This project enables storing Electronic Health Records (EHR) on the Ethereum blockchain using the ERC-721 protocol for NFTs. Prescriptions created by doctors are stored as NFTs on IPFS. The `tokenURI` generated is stored on-chain and mapped to a unique `tokenId`. The project also features Web3-powered signup and login functionality, allowing users to authenticate using wallets like MetaMask or Phantom.

## Features
- **Decentralized EHR Storage:** Prescriptions stored securely as NFTs on IPFS.
- **Web3 Authentication:** Signup and login using wallet addresses and cryptographic nonce verification.
- **Role-based System:** Separate user roles for doctors and patients.
- **Fee Payment:** Seamless fee payment mechanism for doctors using blockchain transactions.

## Prerequisites
- Node.js (v20+)
- MetaMask or Phantom wallet
- Ethereum network (e.g., Rinkeby/Testnet or Mainnet)
- IPFS setup (or Infura for IPFS storage)

## Installation for frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/anasM0hammad/dMed_frontend.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   REACT_APP_CONTRACT_ADDRESS=<address of deployed contract>
   REACT_APP_INFURA_PROJECT_ID=<your-infura-project-id>
   REACT_APP_INFURA_PROJECT_SECRET=<your-infura-project-secret>
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Installation for backend
1. Clone the repository:
   ```bash
   git clone https://github.com/anasM0hammad/dMed_backend.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   MONGODB_URI=mongodb:://URI
   PORT=port number to run on
   SALT=for JWT
   ```
4. Start the application:
   ```bash
   npm start
   ```

## deploying contracts
1. Clone the repository:
   ```bash
   git clone https://github.com/anasM0hammad/dMed_contracts.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. use truffle to compile and deploy:
   ```
   truffle comiple
   truffle migrate
   ```

## Workflow

### 1. Authentication
- **Signup:**
  - Users sign up as a doctor or patient using their wallet address as a unique identifier.
  - All the details will be stored in mongodb database
  - Wallet address will be used as userId.
  - A Nonce will be stored for each user entry

- **Login:**
  - A nonce is generated and stored on the backend.
  - Frontend will do a `getNonce()` call to fetch the user nonce.
  - The user signs the nonce using their wallet (MetaMask/Phantom).
  - The signature then will be sent to backend.
  - The backend verifies the signed nonce and issues a JWT token upon successful verification.

### 2. Creating a Prescription
- Doctors will start the consultation with a valid patient address
- Once done, doctor will add values like symptoms, diagnosis, medicine and findings with prescriptions notes.
- Once consultation is completed doctor will `generate prescription` which will create an entry in db with prescription metadata
- A PDF preview of prescription will be open and other data like consultation cost (in wei) and notes will be entered by doctor
- Doctor digitally signs the PDF and signature will be marked as QR Code on PDF.
- Doctor then end the consultation with PDF gets stored on IPFS returning the tokenURI
- A contract call on ethereum network will be made to `generate NFT` with given `tokenURI`, `cost`, `patientAddress` and doctor as owner
- An ERC-721 token is minted with the `tokenURI` stored on-chain and mapped to a unique `tokenId`.
- Prescription metadata on DB will be updated with `cost`, `tokenId` and `tokenURI`

### 3. Fee Payment
- Patients pay consultation fees to doctors through blockchain transactions.
- Smart contracts handle the payment and ensure transparency and immutability.
- On payment the contract will transfer the ownership of the NFT to the patient from the doctor
- This provides authenticity of EHR made by doctor and payment confirmation from patient.


## Tech Stack
- **Blockchain:** Ethereum, ERC-721, Solidity, Web3, Remix, Truffle
- **Storage:** IPFS, MongoDB
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express, Mongoose
- **Authentication:** JWT, Cryptography

## Getting Started
1. Set up a MetaMask or Phantom wallet.
2. Deploy the smart contracts using the provided scripts:
   ```bash
   npm run deploy
   ```
3. Access the application in your browser:
   ```bash
   http://localhost:3000
   ```

## Future Scope
- SnomedCT can be integrated for retrieving medical data during consultation
- On Confirmation of payment backend can update the status of prescription using events
- Allow login/signup through other methods like email/passsword and social auth
- An extended feature can be implemeted for pharmacies for prescription verification
- so on...

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request with detailed description.


## Contact
For any queries, feel free to reach out:
- **Email:** anas.1633.m@gmail.com
- **GitHub:** [anasM0hammad](https://github.com/anasM0hammad)
