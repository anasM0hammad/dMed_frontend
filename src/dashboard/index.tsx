import { Navigate, Route, Routes } from 'react-router-dom';
import Appointment from './appointment';
import Consultation from './consultation';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Prescription from './prescription';
import { PrescriptionContext } from '../services/prescription.context';
import { useState } from 'react';


const Dashboard = (props: any) => {
    const [data, setData] = useState({});
    console.log(data);
    return (
        <>  
            <Sidebar />
            <div className="body-wrapper">
                <Header />
                <PrescriptionContext.Provider value={{ data, setData } as any}>
                    <Routes>
                        <Route path='/' Component={Appointment}></Route>
                        <Route path='/consult' Component={Consultation}></Route>
                        <Route path='/prescription' Component={Prescription}></Route>
                        <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
                    </Routes>
                </PrescriptionContext.Provider>
            </div>
        </>
    )
}

export default Dashboard;