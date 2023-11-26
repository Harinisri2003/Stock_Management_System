import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div className='login'>
      <Link to='/'>
      <img className='login_logo'
       src='https://www.stockmanagementlabs.com/wp-content/uploads/edd/2018/08/multi-inventory-logo.png'>
       </img>
       </Link>
       <div className='login_container'>
       <h1>Sign-in</h1>
       <form>
        <h5>E-mail</h5>
        <input type='email'  />
        <h5>Password</h5>
        <input type='password'  ></input>
        <Link to="/"><button className='login_signin_btn' type='submit'>Sign in</button></Link>
       </form>
       <p>
       By signing in, you agree to multi-inventory's Conditions of Use and Privacy Notice.
       </p>
       <Link to="/register"><button className='login_register' >Create your account</button></Link>
       </div>
    </div>
  )
}

export default Login