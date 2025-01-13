import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Error from "../components/error";
import * as userService from '../services/user.service';

const Appointment = () => {
    const role = useSelector((state: any) => {
        return state.auth.role;
    });

    const navigate = useNavigate();

    const [patientAddress, setPatientAddress] = useState('');
    const [error, setError] = useState('');

    const onPatientAddress = (event: any) => {
        setPatientAddress(event.target.value);
    }

    const startConsultation = async () => {
        if(!error){
            setError('Address is empty');
            return;
        }
        try{
            const response = await userService.getPatient(patientAddress);
            const patient = response.data;

            if(!patient){
                setError(`Patient doesn't exist`);
                return;
            }
            setError('');
            localStorage.setItem('patientAddress', patientAddress);
            toast.success('Consultation started');
            navigate('/consult');
        }
        catch(error){
            setError(`Patient doesn't exist`);
        }
    }

    const ConsultationComponent = () => {
        return (
            <div className="consultation-div">
                <div className="row mt-2 mb-1">
                    <div className="col-sm-12">
                        <h3 className="text-theme"><b>Start Consultation</b></h3>
                    </div>
                </div>
                <div className="card card-box" >
                    <div className="card-body p-4">
                        <div className="row mx-auto">
                            <div className="col-sm-12">
                                <div className="form-group row">
                                    <div className="col-sm-8">
                                        <label><b>Patient Wallet Address</b></label>
                                        <input className="form-control form-control-sm" autoFocus value={patientAddress} onChange={onPatientAddress}/>
                                        { error ? <Error message={error} /> : <></>}
                                    </div>
                                    <div className="col-sm-4">
                                        <button className="btn btn-primary btn-sm mt-4" onClick={startConsultation}>Start Consultation</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PrescriptionComponent = () => {
        return (
            <div className="prescription-div">
                <div className="row mt-4 mb-1 pt-3">
                    <div className="col-sm-12">
                        <h3 className="text-theme"><b>Prescription History</b></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card p-2 nft-card">
                            <img src="/assets/background/pdf-sample.png" className="card-img-top" alt="..." />
                            <div className="card-body p-1">
                                <h6>Mohammad Anas</h6>
                                <span>12-dec-2024</span>
                                <span className="text-success float-end">Paid</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card p-2 nft-card">
                            <img src="/assets/background/pdf-sample.png" className="card-img-top" alt="..." />
                            <div className="card-body p-1">
                                <h6>Rajesh Kumar</h6>
                                <span>17-dec-2024</span>
                                <span className="text-danger float-end">Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            {
                role === 'doctor' ? <ConsultationComponent /> : <></>
            }
            <PrescriptionComponent />
      </div>
    )
}

export default Appointment;