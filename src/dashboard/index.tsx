import { Navigate, Route, Routes } from 'react-router-dom';
import Appointment from './appointment';
import Consultation from './consultation';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Prescription from './prescription';


const Dashboard = (props: any) => {
    return (
        <>  
            <Sidebar />
            <div className="body-wrapper">
                <Header />
                <Routes>
                    <Route path='/' Component={Appointment}></Route>
                    <Route path='/consult' Component={Consultation}></Route>
                    <Route path='/prescription' Component={Prescription}></Route>
                    <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Dashboard;