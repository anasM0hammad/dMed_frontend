import { useContext, useEffect, useState } from "react";
import { PrescriptionContext } from "../services/prescription.context";
import { getStoreData } from "../redux/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { storeNFTToIPFS } from "../services/web3.services";
import * as contract from '../ethereum/contract';
import * as prescriptionService from '../services/prescription.service';

const Prescription = () => {
    const navigate = useNavigate();
    const { data, setData }: any = useContext(PrescriptionContext);
    const storeData: any = getStoreData();
    const [prescriptionDate, setPrecriptionDate] = useState('');
    const [cost, setCost] = useState('');

    useEffect(() => {
      if(!data || !data.name || !data.dob || !data.gender || !data.prescription){
        toast.error('Data missing from consultation');
        navigate("/consult");
        return;
      } 
    }, [data]);


    const generatePrescription = async () => {
        const pdf = new ArrayBuffer(10);  // TODO: Convert prescription HTML to PDF using JSPDF and use that array buffer
        try{
          const response: any = await storeNFTToIPFS(pdf);
          const tokenURI = response.data.tokenURI;
          const tokenId = await contract.generatePrescription(tokenURI, Number(cost), localStorage.getItem('patientAddress') as string);
          const res = await prescriptionService.updatePrescription({ prescriptionId: data['prescriptionId'], cost, tokenId, tokenURI});
          toast.success('Consultation completed');
        }
        catch(error){
          toast.error('Failed to generate prescription');
        }
    }

    return (
    <div className="container-fluid">
        <div className="row">
          <h4><b>Prescription Preview</b></h4>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h5><b>{ data.name }</b></h5>
                    Patient gender: <b>{ data.gender }</b><br/>
                    Patient DOB: <b>{ data.dob }</b><br/>
                    12th January 2024
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-12">
                        <img src="/assets/background/qr.svg" className="qr" alt=""/>
                      </div>
                      <div className="col-sm-12">
                        <small className="float-end">Patient address</small>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-6">
                    <h5><b>Dr { `${storeData.auth.firstName} ${storeData.auth.lastName}`  }</b></h5>
                    { storeData.auth.degree }
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-12">
                        <img src="/assets/background/qr.svg" className="qr" alt=""/>
                      </div>
                      <div className="col-sm-12">
                        <small className="float-end">Doctor's address</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-form mt-4">
                 <table className="table table-bordered table-sm">
                  <thead className="table-dark">
                    <tr>
                      <th>Symptom</th>
                      <th>Severity</th>
                      <th>Since</th>
                    </tr>
                  </thead>
                  <tbody>
                  { data.prescription?.symptoms && data.prescription?.symptoms.map((symptom: any) => {
                      return (
                          <tr>
                            <th>{ symptom.name }</th>
                            <th>{ symptom.severity }</th>
                            <th>{ symptom.since }</th>
                          </tr>
                      )
                    })
                  }
                  </tbody>
                 </table>
                 <table className="table table-sm table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Findings</th>
                      <th>Severity</th>
                      <th>Since</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.prescription?.findings && data.prescription?.findings.map((finding: any) => {
                        return (
                          <tr>
                            <th>{ finding.name }</th>
                            <th>{ finding.severity }</th>
                            <th>{ finding.since }</th>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                 </table>

                 <table className="table table-sm table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Diagnosis</th>
                    </tr>
                  </thead>
                  <tbody>
                    { 
                      data.prescription.diagnosises && data.prescription.diagnosises.map((diagnosis: any) => {
                        return (
                          <tr>
                            <th>{ diagnosis.name }</th>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                 </table>

                 <table className="table table-sm table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Medicine</th>
                      <th>Quantity</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.prescription.medicines && data.prescription.medicines.map((medicine: any) => {
                        return (
                          <tr>
                            <th>{ medicine.name }</th>
                            <th>{ medicine.quantity }</th>
                            <th>{ medicine.time }</th>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                 </table>
                  <div className="form-group row mt-4">
                    <div className="col-sm-12">
                      <p>{ data.prescription?.notes }</p>
                    </div>
                  </div>
                  <div className="d-grid mt-4">
                    <button className="btn btn-primary btn-block" onClick={generatePrescription}>Generate Prescription</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card side-panel">
              <div className="card-body">
                <div>
                  <div className="form-group mb-3">
                    <label className="form-label">Consultation charges</label>
                    <div className="input-group">
                      <input type="text" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} />
                      <span className="input-group-text input-span">wei</span>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Follow up</label>
                    <input className="form-control" type="date" value={prescriptionDate} onChange={(e) => setPrecriptionDate(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Prescription;