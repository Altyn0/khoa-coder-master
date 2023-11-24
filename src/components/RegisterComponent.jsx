import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
const RegisterComponent = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log(email)       
       }

    const handleLogin =() =>{
        
    }  
  return (
   <div className='auth-form-container'>
    <h2>Register</h2>
    <form className='register-form' onSubmit={handleSubmit}>
        <label className='label-form' htmlFor='name' >Full Name :</label>
        <input className='input-form' value={name} name='name' id='name' placeholder='Full Name'/>
        <label className='label-form' htmlFor='email'>Email :</label>
        <input className='input-form' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='YourEmail@gmail.com' id='email' name='email'/>
        <label className='label-form' htmlFor='password'>PassWord :</label>
        <input className='input-form' value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='*******' id='password' name='password'/>
        <button className='btn-form' type='submit'> <Link className='link-a' to={'/homescreen'}> Log in </Link> </button>
    </form>
    <button className='btn-link' onClick={()=>props.onFormSwitch('login')} >Already have an account? Login here.</button>
   </div>
  )
}

export default RegisterComponent