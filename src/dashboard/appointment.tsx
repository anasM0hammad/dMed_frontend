import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Error from "../components/error";
import * as userService from '../services/user.service';
import * as prescriptionService from '../services/prescription.service';
import { buyNFT } from "../ethereum/contract";
import { getNFTFromIPFS } from "../services/web3.services";

const Appointment = () => {
    const role = useSelector((state: any) => {
        return state.auth.role;
    });

    const navigate = useNavigate();

    const [patientAddress, setPatientAddress] = useState('');
    const [prescriptions, setPrescriptions] = useState([]);
    const [error, setError] = useState('');

    const fetchPrescriptions = async () => {
        try{
            const response = await prescriptionService.getPrescription();
            const fetchedPrescriptions = response.data;
            setPrescriptions(fetchedPrescriptions);
        }
        catch(err){
            toast.error('Failed to fetch prescriptions');
        }
    }

    const onPrescription = async (index: number) => {
        if(role === 'patient'){
            if(prescriptions[index]['status'] === 'pending'){
                toast.warning('please buy the prescription');
                const cost = prescriptions[index]['cost'];
                const tokenId = prescriptions[index]['tokenId'];
                try{
                    const response = await buyNFT(tokenId, cost);
                    const update = await prescriptionService.updatePrescription({prescriptionId: prescriptions[index]['_id']});
                    const p: any = [...prescriptions];
                    p[index]['status'] = 'paid';
                    setPrescriptions(p);
                    toast.success('Payment successful');
                }
                catch(error){
                    toast.error('payment failed');
                }
            }
            else{
                const tokenURI = prescriptions[index]['tokenURI'];
                const prescriptionPDF = await getNFTFromIPFS(tokenURI);
            }
        }
        else{
            const tokenURI = prescriptions[index]['tokenURI'];
            const prescriptionPDF = await getNFTFromIPFS(tokenURI);
        }
    }

    useEffect(() => {
        fetchPrescriptions();
    }, []);

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
                    {
                        prescriptions.map((prescription: any, i) => {
                            return (
                                <div className="col-sm-3">
                                    <div className="card p-2 nft-card" onClick={onPrescription.bind(undefined,i)}>
                                        <img src="/assets/background/pdf-sample.png" className="card-img-top" alt="..." />
                                        <div className="card-body p-1">
                                            <span>{ prescription.createdAt }</span>
                                            <span className="text-success float-end">{ prescription.status }</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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