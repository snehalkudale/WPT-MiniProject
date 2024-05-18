import React, { useState } from 'react';
import './Login.css';
import icon from './App Icon.jpg'
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (!email) {
      alert('Email must be filled out');
      return false;
    }

    if (!password) {
      alert('Password must be filled out');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // handle form submission here
      console.log('Form submitted:', { email, password });
      // replace with actual form submission logic, e.g., using fetch or axios
    }
  };

  return (
    <div className='body'>
    <div className="container1">
      <h2>Login To Your Account</h2>

      <div className="imgcontainer">
        <img src={icon} alt="Avatar" className="avatar" />
      </div>

      <form onSubmit={handleSubmit}>
        <label><b>Email</b></label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className='center'>
        {/* <a href="/" className="loginbtn">Login</a> */}
        {/* <Link to="/" className="loginbtn">Login</Link> */}
        Login
        </button>

      </form>

      <br />

      <button type="button" className='log' style={{  alignItems:'center' }}>
        {/* <a href="SignUp.html" className="signupbtn">Create Account</a>  */}
        <Link to="/signup" className="signupbtn">Create Account</Link>
      </button>

      <br />

      <button type="button" className='changepass'>
       <Link to="/forgotPassword" className='changepwrd'>Forgot Password?</Link>
      </button>
    </div>
    </div>
  );
};

export default Login;
