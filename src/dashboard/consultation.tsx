import { useState } from "react";

const tab = {
    SYMPTOMS: 'SYMPTOMS',
    FINDINGS: 'FINDINGS',
    DIAGNOSIS: 'DIAGNOSIS',
    MEDICINE: 'MEDICINE',
}

const Consultation = () => {
    const [currentTab, setCurrentTab] = useState(tab.SYMPTOMS);

    const selectTab = (tab: string) => {
        setCurrentTab(tab);
    }

    const Symptoms = () => {
        return (
            <div>
                <h6 className="mb-4"><b>Fever</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Severity</label>
                    <select className="form-control">
                        <option>Mild</option>
                        <option>Moderate</option>
                        <option>Severe</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Since</label>
                    <select className="form-control">
                        <option>1 Day</option>
                        <option>2 Days</option>
                        <option>3 Days</option>
                        <option>More</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control"></textarea>
                </div>
            </div>
        )
    }

    const Findings = () => {
        return (
            <div>
                <h6 className="mb-4"><b>Headache</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Severity</label>
                    <select className="form-control">
                        <option>Mild</option>
                        <option>Moderate</option>
                        <option>Severe</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Since</label>
                    <select className="form-control">
                        <option>1 Day</option>
                        <option>2 Days</option>
                        <option>3 Days</option>
                        <option>More</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control"></textarea>
                </div>
            </div>
        )
    }

    const Diagnosis = () => {
        return (
            <div>
                <h6 className="mb-4"><b>Pnemonia</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control"></textarea>
                </div>
            </div>
        )
    }

    const Medicine = () => {
        return (
            <div>
                <h6 className="mb-4"><b>Paracetamol</b></h6>
                <div className="form-group mb-3">
                    <label className="form-label">Quantity</label>
                    <input className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Time</label>
                    <select className="form-control">
                        <option>Before Food</option>
                        <option>After Food</option>
                        <option>Before Sleep</option>
                        <option>After Sleep</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control"></textarea>
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
                      <input type="text" list="languageList" className="form-control"/>
                      <datalist id="languageList">
                        <option>Fever</option>
                        <option>Headache</option>
                        <option>Rash</option>
                      </datalist>
                      <p className="mt-2">
                        <span className="badge bg-primary position-relative langPill">Fever
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                        </span>
                        <span className="badge bg-primary position-relative langPill">Headache
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                        </span>
                      </p>
                  </div>
                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.FINDINGS)}>
                      <label className="form-label cursor">Findings</label>
                        <input type="text" list="languageList" className="form-control" />
                        <datalist id="languageList">
                          <option>Fever</option>
                          <option>Headache</option>
                          <option>Rash</option>
                        </datalist>
                        <p className="mt-2">
                          <span className="badge bg-primary position-relative langPill">Fever
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                          <span className="badge bg-primary position-relative langPill">Headache
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                        </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.DIAGNOSIS)}>
                      <label className="form-label cursor">Diagnosis</label>
                        <input type="text" list="languageList" className="form-control" />
                        <datalist id="languageList">
                          <option>Fever</option>
                          <option>Headache</option>
                          <option>Rash</option>
                        </datalist>
                        <p className="mt-2">
                          <span className="badge bg-primary position-relative langPill">Fever
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                          <span className="badge bg-primary position-relative langPill">Headache
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                        </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group" onClick={selectTab.bind(undefined, tab.MEDICINE)}>
                      <label className="form-label cursor">Medicine</label>
                        <input type="text" list="languageList" className="form-control" />
                        <datalist id="languageList">
                          <option>Fever</option>
                          <option>Headache</option>
                          <option>Rash</option>
                        </datalist>
                        <p className="mt-2">
                          <span className="badge bg-primary position-relative langPill">Fever
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                          <span className="badge bg-primary position-relative langPill">Headache
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pill-cross">x</span>
                          </span>
                        </p>
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <div className="col-sm-12">
                      <label className="form-label">Prescription Notes</label>
                      <textarea className="form-control" rows={4} name="" id=""></textarea>
                    </div>
                  </div>
                  <div className="d-grid mt-4">
                    <button className="btn btn-primary btn-block">Generate Prescription</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card side-panel">
              <div className="card-body">
                { currentTab === tab.SYMPTOMS ? <Symptoms /> : <></> }
                { currentTab === tab.FINDINGS ? <Findings /> : <></> }
                { currentTab === tab.DIAGNOSIS ? <Diagnosis /> : <></> }
                { currentTab === tab.MEDICINE ? <Medicine /> : <></> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Consultation;