const Prescription = () => {
    return (
    <div className="container-fluid">
        <div className="row">
          <h4><b>Prescription Preview</b></h4>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h5><b>Mohammad Anas</b></h5>
                    Patient gender: <b>Male</b><br/>
                    Patient age: <b>25 years</b><br/>
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
                    <h5><b>Dr Harsh vardhan</b></h5>
                    MBBS,MD
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
                    <tr>
                      <th>Fever</th>
                      <th>Moderate</th>
                      <th>2 Days</th>
                    </tr>
                    <tr>
                      <th>Cold</th>
                      <th>Mild</th>
                      <th>3 Days</th>
                    </tr>
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
                    <tr>
                      <th>Fever</th>
                      <th>Moderate</th>
                      <th>2 Days</th>
                    </tr>
                  </tbody>
                 </table>

                 <table className="table table-sm table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Diagnosis</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Fever</th>
                      <th>Moderate</th>
                    </tr>
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
                    <tr>
                      <th>Paracetamol</th>
                      <th>2 Tablet</th>
                      <th>2 Days</th>
                    </tr>
                  </tbody>
                 </table>
                  <div className="form-group row mt-4">
                    <div className="col-sm-12">
                      <p>Some very good prescription notes</p>
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
                <div>
                  <div className="form-group mb-3">
                    <label className="form-label">Consultation charges</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text input-span">wei</span>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Follow up</label>
                    <input className="form-control" type="date"/>
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