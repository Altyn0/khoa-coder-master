import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginComponent = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState();

    const handleSubmit = (e) => {
     e.preventDefault();  
     console.log(email)       
    }

  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
    <form className='login-form'  onSubmit={handleSubmit}>
        <label  className='label-form' htmlFor='email'>Email :</label>
        <input className='input-form' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='YourEmail@gmail.com' id='email' name='email'/>
        <label  className='label-form' htmlFor='password'>Password :</label>
        <input className='input-form' value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='*******' id='password' name='password'/>
        <button className='btn-form' type='submit'><Link className='link-a' to={'/homescreen'}> Log in </Link></button>
    </form>
    <button className='btn-link' onClick={()=>props.onFormSwitch('register')} >Dont have an account? Register here.</button>
    </div>
  )
}

export default LoginComponent