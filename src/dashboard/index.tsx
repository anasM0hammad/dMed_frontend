import { Navigate, Route, Routes } from 'react-router-dom';
import Appointment from './appointment';
import Consultation from './consultation';


const Dashboard = (props: any) => {
    return (
        <Routes>
            <Route path='/' Component={Appointment}></Route>
            <Route path='/consult' Component={Consultation}></Route>
            <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>
    )
}

export default Dashboard;