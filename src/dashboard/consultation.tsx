import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as userService from '../services/user.service';
import { PrescriptionContext } from "../services/prescription.context";
import * as prescriptionService from '../services/prescription.service';

const tab = {
    SYMPTOMS: 'SYMPTOMS',
    FINDINGS: 'FINDINGS',
    DIAGNOSIS: 'DIAGNOSIS',
    MEDICINE: 'MEDICINE',
}

const Consultation = () => {
    const [currentTab, setCurrentTab] = useState(tab.SYMPTOMS);
    const navigate = useNavigate();
    const { data, setData } = useContext(PrescriptionContext);

    const [symptoms, setSymptoms] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [findings, setFindings] = useState([]);
    const [diagnosises, setDiagnosises] = useState([]);
    const [notes, setNotes] = useState('');

    const symptomRef: any = useRef();
    const findingRef: any = useRef();
    const diagnosisRef: any = useRef();
    const medicineRef: any = useRef();

    const [selectedSymptom, setSelectedSymptom] = useState(-1);
    const [selectedFinding, setSelectedFinding] = useState(-1);
    const [selectedMedicine, setSelectedMedicine] = useState(-1);
    const [selectedDiagnosis, setSelectedDiagnosis] = useState(-1);

    const fetchPatientData = async (patientAddress: string) => {
      try{
        const response = await userService.getPatient(patientAddress);
        const patient = response.data;

        if(!patient){
          toast.error('Patient not found');
          navigate('/');
          return;
        }

        const newData: any = {...data};
        newData['name'] = patient.name;
        newData['dob'] = patient.dob;
        newData['gender'] = patient.gender;
        setData(newData);
      }
      catch(error){
          toast.error('Failed to fetch patient. server error');
          navigate('/');
      }
    } 

    useEffect(() => {
      const patientAddress = localStorage.getItem('patientAddress');
      if(!patientAddress){
        toast.error('Please start the consultation first');
        navigate('/');
        return;
      }

      fetchPatientData(patientAddress);

    }, []);

    const addSymptom = () => {
      const value = symptomRef.current.value;
      if(!value) return;

      const newSymptom = { name: value, severity: '', since: ''};
      const symptomArr: any = [...symptoms];
      symptomArr.push(newSymptom);
      symptomRef.current.value = '';
      setSymptoms(symptomArr);
      setSelectedSymptom(symptomArr.length - 1);
    }

    const removeSymptom = (index: any) => {
      if(index < 0 || index >= symptoms.length){
        toast.error('index out of bound');
        return;
      }

      const symptomArr = [...symptoms];
      symptomArr.splice(index, 1);
      setSymptoms(symptomArr);
      setSelectedSymptom(-1);
    }

    const updateSymptom = (key: string, value: string) => {
      const index = selectedSymptom;
      if(index < 0 || index >= symptoms.length){
        toast.error('index out of bound');
        return;
      }

      const symptomArr: any = [...symptoms];
      symptomArr[index][key] = value;
      setSymptoms(symptomArr);
    }


    const addFinding = () => {
      const value = findingRef.current.value;
      if(!value) return;

      const newfinding = { name: value, severity: '', since: ''};
      const findingArr: any = [...findings];
      findingArr.push(newfinding);
      findingRef.current.value = '';
      setFindings(findingArr);
      setSelectedFinding(findingArr.length - 1);
    }

    const removeFinding = (index: any) => {
      if(index < 0 || index >= findings.length){
        toast.error('index out of bound');
        return;
      }

      const findingArr = [...findings];
      findingArr.splice(index, 1);
      setFindings(findingArr);
      setSelectedFinding(-1);
    }

    const updateFinding = (key: string, value: string) => {
      const index = selectedFinding;
      if(index < 0 || index >= findings.length){
        toast.error('index out of bound');
        return;
      }

      const findingArr: any = [...findings];
      findingArr[index][key] = value;
      setFindings(findingArr);
    }


    const addDiagnosis = () => {
      const value = diagnosisRef.current.value;
      if(!value) return;

      const newDiagnosis = { name: value };
      const diagnosisArr: any = [...diagnosises];
      diagnosisArr.push(newDiagnosis);
      diagnosisRef.current.value = '';
      setDiagnosises(diagnosisArr);
      setSelectedDiagnosis(diagnosisArr.length - 1);
    }

    const removeDiagnosis = (index: any) => {
      if(index < 0 || index >= diagnosises.length){
        toast.error('index out of bound');
        return;
      }

      const diagnosisArr = [...diagnosises];
      diagnosisArr.splice(index, 1);
      setDiagnosises(diagnosisArr);
      setSelectedDiagnosis(-1);
    }

    const updateDiagnosis = (key: string, value: string) => {
      const index = selectedDiagnosis;
      if(index < 0 || index >= diagnosises.length){
        toast.error('index out of bound');
        return;
      }

      const diagnosisArr: any = [...diagnosises];
      diagnosisArr[index][key] = value;
      setDiagnosises(diagnosisArr);
    }


    const addMedicine = () => {
      const value = medicineRef.current.value;
      if(!value) return;

      const newMedicine = { name: value, quantity: '', time: ''};
      const medicineArr: any = [...medicines];
      medicineArr.push(newMedicine);
      medicineRef.current.value = '';
      setMedicines(medicineArr);
      setSelectedMedicine(medicineArr.length - 1);
    }

    const removeMedicine = (index: any) => {
      if(index < 0 || index >= medicines.length){
        toast.error('index out of bound');
        return;
      }

      const medicineArr = [...medicines];
      medicineArr.splice(index, 1);
      setMedicines(medicineArr);
      setSelectedMedicine(-1);
    }

    const updateMedicine = (key: string, value: string) => {
      const index = selectedMedicine;
      if(index < 0 || index >= medicines.length){
        toast.error('index out of bound');
        return;
      }

      const medicineArr: any = [...medicines];
      medicineArr[index][key] = value;
      setMedicines(medicineArr);
    }

    const selectSymptom = (index: number) => {
      if(index < 0 || index >= symptoms.length){
        toast.error('index out of bound');
      }
      setSelectedSymptom(index);
    }

    const selectFinding = (index: number) => {
      if(index < 0 || index >= findings.length){
        toast.error('index out of bound');
      }
      setSelectedFinding(index);
    }

    const selectDiagnosis = (index: number) => {
      if(index < 0 || index >= diagnosises.length){
        toast.error('index out of bound');
      }
      setSelectedDiagnosis(index);
    }

    const selectMedicine = (index: number) => {
      if(index < 0 || index >= medicines.length){
        toast.error('index out of bound');
      }
      setSelectedMedicine(index);
    }

    const selectTab = (tab: string) => {
        setCurrentTab(tab);
    }

    const generatePrescription = async () => {
      const prescriptionData ={
        symptoms,
        findings,
        diagnosises,
        medicines,
        notes
      };

      const newData: any = {...data, prescription: prescriptionData};
      try{
        const createdPrescription = await prescriptionService.createPrescription({ patient: localStorage.getItem('patientAddress')});
        newData['prescriptionId'] = createdPrescription.data.prescriptionId;
        setData(newData);
        navigate("/prescription");
      }
      catch(error){
        toast.error('Failed to create prescription');
      }
      
    }

    const Symptoms = () => {
        return (
            <div>
                <h6 className="mb-4"><b>{ (symptoms[selectedSymptom] as any)?.name }</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Severity</label>
                    <select className="form-control" value={symptoms[selectedSymptom]['severity']} onChange={(event) => updateSymptom('severity', event.target.value)}>
                        <option value="Mild">Mild</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Severe">Severe</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Since</label>
                    <select className="form-control" value={symptoms[selectedSymptom]['since']} onChange={(event) => updateSymptom('since', event.target.value)}>
                        <option value="1 Day">1 Day</option>
                        <option value="2 Day">2 Days</option>
                        <option value="3 Day">3 Days</option>
                        <option value="More">More</option>
                    </select>
                </div>
            </div>
        )
    }

    const Findings = () => {
        return (
            <div>
                <h6 className="mb-4"><b>{ findings[selectedFinding]['name'] }</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Severity</label>
                    <select className="form-control" value={findings[selectedFinding]['severity']} onChange={(e) => updateFinding('severity', e.target.value)}>
                        <option value="mild">Mild</option>
                        <option value="moderate">Moderate</option>
                        <option value="severe">Severe</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Since</label>
                    <select className="form-control" value={findings[selectedFinding]['since']} onChange={(e) => updateFinding('since', e.target.value)}>
                        <option value="1 day">1 Day</option>
                        <option value="2 day">2 Days</option>
                        <option value="3 day">3 Days</option>
                        <option value="more">More</option>
                    </select>
                </div>
            </div>
        )
    }

    const Diagnosis = () => {
        return (
            <div>
                <h6 className="mb-4"><b>{ diagnosises[selectedDiagnosis]['name'] }</b></h6>
                {/* <div className="form-group mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control" value={diagnosises[selectedDiagnosis]['notes']} onChange={(e) => updateDiagnosis('notes', e.target.value)}></textarea>
                </div> */}
            </div>
        )
    }

    const Medicine = () => {
        const inputRef: any = useRef('');
        const onQuantity = () => {
          const value = inputRef.current.value;
          updateMedicine('quantity', value);
        }

        return (
            <div>
                <h6 className="mb-4"><b>{ medicines[selectedMedicine]['name'] }</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Quantity</label>
                    <div className="row">
                      <div className="col-sm-9 p-0 m-0">
                        <input className="form-control" defaultValue={medicines[selectedMedicine]['quantity']} ref={inputRef} />
                      </div>
                      <div className="col-sm-3">
                        <button className="btn btn-primary" onClick={onQuantity}>Add</button>
                      </div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Time</label>
                    <select className="form-control" value={medicines[selectedMedicine]['time']} onChange={(e) => updateMedicine('time', e.target.value)}>
                        <option value="Before Food">Before Food</option>
                        <option value="After Food">After Food</option>
                        <option value="Before Sleep">Before Sleep</option>
                        <option value="After Sleep">After Sleep</option>
                    </select>
                </div>
            </div>
        )
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="post-form mt-4">
                  <div className="form-group" onClick={selectTab.bind(undefined, tab.SYMPTOMS)}>
                      <label className="form-label cursor">Symptoms</label>
                      <div className="row m-0 p-0">
                        <div className="col-sm-9">
                          <input type="text" className="form-control" ref={symptomRef} />
                        </div>
                        <div className="col-sm-3">
                          <button className="btn btn-primary btn-sm" onClick={addSymptom} >Add</button>
                        </div>
                      </div>
                      
                      <p className="mt-2">
                        { 
                          symptoms.map((symptom: any, i) => {
                            return (<span className="badge bg-primary position-relative langPill" onClick={selectSymptom.bind(undefined, i)}>{symptom.name}
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross" onClick={removeSymptom.bind(undefined, i)}>x</span>
                              </span>)
                          })
                        }
                      </p>
                  </div>
                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.FINDINGS)}>
                        <label className="form-label cursor">Findings</label>
                        <div className="row m-0 p-0">
                          <div className="col-sm-9">
                            <input type="text" className="form-control" ref={findingRef} />
                          </div>
                          <div className="col-sm-3">
                            <button className="btn btn-primary btn-sm" onClick={addFinding}>Add</button>
                          </div>
                        </div>
                        <p className="mt-2">
                          {
                            findings.map((finding: any, i) => {
                              return (<span className="badge bg-primary position-relative langPill" onClick={selectFinding.bind(undefined, i)}>{ finding.name }
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross" onClick={removeFinding.bind(undefined, i)}>x</span>
                                  </span>)
                            })
                          }
                        </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.DIAGNOSIS)}>
                        <label className="form-label cursor">Diagnosis</label>
                        <div className="row m-0 p-0">
                          <div className="col-sm-9">
                            <input type="text" className="form-control" ref={diagnosisRef} />
                          </div>
                          <div className="col-sm-3">
                            <button className="btn btn-primary btn-sm" onClick={addDiagnosis}>Add</button>
                          </div>
                        </div>
                        <p className="mt-2">
                          {
                            diagnosises.map((diagnosis: any, i) => {
                              return (
                                <span className="badge bg-primary position-relative langPill" onClick={selectDiagnosis.bind(undefined, i)}>{ diagnosis.name }
                                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross" onClick={removeDiagnosis.bind(undefined, i)}>x</span>
                                </span>
                              )
                            })
                          }
                        </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.MEDICINE)}>
                        <label className="form-label cursor">Medicine</label>
                        <div className="row m-0 p-0">
                          <div className="col-sm-9">
                            <input type="text" className="form-control" ref={medicineRef} />
                          </div>
                          <div className="col-sm-3">
                            <button className="btn btn-primary btn-sm" onClick={addMedicine}>Add</button>
                          </div>
                        </div>
                        <p className="mt-2">
                          {
                            medicines.map((medicine: any, i) => {
                              return (
                                <span className="badge bg-primary position-relative langPill" onClick={selectMedicine.bind(undefined, i)} >{ medicine.name }
                                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross" onClick={removeMedicine.bind(undefined, i)}>x</span>
                                </span>
                              )
                            })
                          }
                        </p>
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <div className="col-sm-12">
                      <label className="form-label">Prescription Notes</label>
                      <textarea className="form-control" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                    </div>
                  </div>
                  <div className="d-grid mt-4">
                    <button className="btn btn-primary btn-block" onClick={generatePrescription}>End Consultation</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card side-panel">
              <div className="card-body">
                { currentTab === tab.SYMPTOMS && selectedSymptom >= 0 ? <Symptoms /> : <></> }
                { currentTab === tab.FINDINGS && selectedFinding >= 0 ? <Findings /> : <></> }
                { currentTab === tab.DIAGNOSIS && selectedDiagnosis >= 0 ? <Diagnosis /> : <></> }
                { currentTab === tab.MEDICINE && selectedMedicine >= 0 ? <Medicine /> : <></> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Consultation;