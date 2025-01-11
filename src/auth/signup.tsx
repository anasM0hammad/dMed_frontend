import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../services/auth.service';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
    const [role, setRole] = useState('doctor');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('male');
    const [degree, setDegree] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const getAddress = async () => {
        try{
            const address = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            if(address.length === 0){
                toast.error('No accounts found');
                return '';
            }
            setAddress(address[0]);
            return address[0];
        }
        catch(error: any){
            if(error.code === 4001){
                toast('Please connect to wallet');
            }
            else{
                console.log(error);
            }
            return '';
        }
    }

    const onRoleChange = (event: any) => {
        const value = event.target.value;
        setRole(value);
    }

    const onFirstNameChange = (event: any) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const onLastNameChange = (event: any) => {
        const value = event.target.value;
        setLastName(value);
    }

    const onGenderChange = (event: any) => {
        const value = event.target.value;
        setGender(value);
    }

    const onDegreeChange = (event: any) => {
        const value = event.target.value;
        setDegree(value);
    }

    const onDobChange = (event: any) => {
        const value = event.target.value;
        setDob(value);
    }


    const onAddresChange = (event: any) => {
        const value = event.target.value;
        setAddress(value);
    }

    const onSignup = async () => {
        const address = await getAddress();
        if(!address){
            toast.error('Error in getting wallet address');
            return;
        }
        const body = { firstName, lastName, gender, dob, degree, role, address };
        try{
            const response: AxiosResponse = await authService.signup(body);
            const data = response.data;
            console.log('signedup');
            toast.success('Signup successful');
            navigate('/');
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6 col-sm-8 col-xxl-6">
                        <div className="card mb-0">
                            <div className="card-body">
                                <Link to="/" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                    <img src="/assets/images/logo/dmed-logo-white.png" width="180" alt="" />
                                </Link>
                            
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" onChange={onFirstNameChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" onChange={onLastNameChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Wallet Address</label>
                                        <input type="text" className="form-control" value={address} onFocus={getAddress} onChange={onAddresChange} />
                                    </div>
                                    <div className="mb-2 row">
                                        <div className="col-sm-6">
                                            <label className="form-label">Gender</label>
                                            <select className="form-control" onChange={onGenderChange} >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label">Register As</label>
                                            <select className="form-control" onChange={onRoleChange}>
                                                <option value='doctor'>Doctor</option>
                                                <option value='patient'>Patient</option>
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        role === 'doctor' ? (
                                            <div className="mb-2">
                                                <label className="form-label">Degree</label>
                                                <input className="form-control" type="text" onChange={onDegreeChange} />
                                            </div>
                                        ) : 
                                        (
                                            <div className="mb-2">
                                                <label className="form-label">Date of Birth</label>
                                                <input className="form-control" type="date" onChange={onDobChange} />
                                            </div>
                                        )
                                    }
                                    <button type='button' className="btn btn-primary w-100 py-8 fs-4 my-4 rounded-2" onClick={onSignup}>Sign Up</button>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                                        <Link className="text-primary fw-bold ms-2" to="/">Sign In</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;