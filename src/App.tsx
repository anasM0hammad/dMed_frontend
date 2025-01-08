import { Route, Routes } from 'react-router-dom';
import dashboard from './dashboard';
import Auth from './auth';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state: any) => {
    return state.auth.isLoggedIn
  });

  return (
    <div className="App">
      {
        isLoggedIn ? (
          <Routes>
            <Route path='/' Component={dashboard}/>
          </Routes>
        ) : 
        (
          <Routes>
            <Route path='/auth' Component={Auth}/>
          </Routes>
        )
      }
    </div>
  );
}

export default App;
