import { Link } from "react-router-dom";

const Hero = () => {
    return (<>
      <div>  
        <nav className="navbar navbar-expand-lg p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/assets/images/logo/dmed-logo.png" alt="Logo" width="160" height="45" className="d-inline-block align-text-top pr-1" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
              </ul>
              <div className="d-flex" >
                <button className="btn text-dark border border-dark" type="submit"><b>Login</b></button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
     <div className="body-container">
      <div className="row main-slide margin-wrapper m-0">
        <div className="col-sm-12 col-md-6 d-block d-md-none d-lg-none d-xl-none d-xxl-none">
          <img className="img-fluid" src="/assets/background/dmed-main.svg" alt="" />
        </div>
        <div className="col-sm-12 col-md-5">
          <h1 className="display-3 headline"><b>Decentralized EHR for your clinic.</b></h1>
          <div className="d-grid mt-5">
            <Link to="/auth/signup" className="btn btn-lg btn-primary">Register as doctor</Link>
            <Link to="/auth/signup" className="btn btn-lg btn-outline-primary mt-3 no-hover">Register as patient</Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-1"></div>
        <div className="col-sm-12 col-md-5 d-none d-md-block d-lg-block d-xl-block d-xxl-block">
          <img className="img-fluid" src="/assets/background/dmed-main.svg" alt="" />
        </div>
      </div>
     </div>
    </>);
}

export default Hero;