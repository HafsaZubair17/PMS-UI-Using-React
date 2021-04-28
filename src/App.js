import React from 'react';
import './App.css';
import MainDashboard from './components/Dashboard/MainDashboard'
import Infor from './components/Dashboard/Info'
import Login from './components/User/login/login';
import Register from './components/User/Register/Register';
import ForgotPass from './components/User/ForgotPass/ForgotPass';

function App() {
  return (
    <div className="App">
      < Login/>
    </div>
  );
}

export default App;
