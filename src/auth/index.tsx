import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './signup';
import Hero from './hero';

const Auth = () => {
    return (
        <Routes>
            <Route path='/' Component={Hero}></Route>
            <Route path='/signup' Component={Signup}></Route>
            <Route path="/*" element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>
    )
}

export default Auth;