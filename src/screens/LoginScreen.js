import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'

export const LoginScreen = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm (formName);
  }
  return (
    <div className='auth-login'>
      {
        currentForm === "login" ? <LoginComponent onFormSwitch ={toggleForm} /> : <RegisterComponent onFormSwitch ={toggleForm}/>
      }
    </div>
  );
}
