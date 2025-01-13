import { Navigate, Route, Routes } from 'react-router-dom';
import dashboard from './dashboard';
import Auth from './auth';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Hero from './auth/hero';
import { ToastContainer } from 'react-toastify';

function ProviderConfig() {
  const isLoggedIn = useSelector((state: any) => {
    return state.auth.isLoggedIn
  });

  return (
    <div className="App header-bg">
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      {
        isLoggedIn ? (
          <Routes>
            <Route path='/*' Component={dashboard}/>
          </Routes>
        ) : 
        (
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/*' element={<Navigate to="/auth/signup" />} />
            <Route path='/auth/*' Component={Auth}/>
          </Routes>
        )
      }
      <ToastContainer position='bottom-left' />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <ProviderConfig></ProviderConfig>
      </PersistGate>
    </Provider>
  )
}

export default App;
