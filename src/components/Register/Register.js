import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
        <Link to='/'>
      <img className='register_logo'
       src='https://www.stockmanagementlabs.com/wp-content/uploads/edd/2018/08/multi-inventory-logo.png'>
       </img>
       </Link>
         <h1 className='register-h1'>Registration Form</h1>
    <p className='register-p'>Please fill out this form with the required information</p>
    <form className='register-form' method="post" >
      <fieldset>
        <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
        <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        <label for="company">Enter Your Company name: <input id="company" name="text" type="text" required /></label>
      </fieldset>
      <fieldset>
        <legend>Account type (required)</legend>
        <label for="personal-account"><input id="personal-account" type="radio" name="account-type" class="inline" checked /> Personal</label>
        <label for="business-account"><input id="business-account" type="radio" name="account-type" class="inline" /> Business</label>
      </fieldset>
      <fieldset>
        <label for="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file" /></label>
        <label for="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
        <label for="referrer">How did you hear about us?
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">Government</option>
            <option value="2">Govenment Aided</option>
            <option value="3">Private</option>
          </select>
        </label>
        <label for="bio">Provide a bio:
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
        </label>
      </fieldset>
      <label for="terms-and-conditions">
        <input class="inline" id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /> I accept the <a className='register-a' href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
      </label>
     <Link to='/login'> <input type="submit" value="Submit" /> </Link>
    </form>
    </div>
  )
}

export default Register