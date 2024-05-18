import React, {useState} from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const validateForm = () => {
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (password === "") {
      alert("Password must be filled out");
      return false;
    }

    // Password length validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }

    if (confirmPassword === "") {
      alert("Confirm Password must be filled out");
      return false;
    }

    // Password confirmation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    alert("Account Created Successfully!");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Navigate to Login.html
      window.location.href = 'Login.html';
    }
  };



  return (
    <div className="body">
    <div className="container2">
      <h1 className='h1'>SignUp</h1>
      <p className='p'>Please fill in this form to create an account.</p>
      <br />
      <form name="signupForm" onSubmit={handleSubmit} method="post" action="Login.html">
      <label><b>Email</b></label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label><b>Confirm Password</b></label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br/>
        <button type="submit" className="signupbtn1">Sign Up</button>
      </form>
      <br />
      <p> Already have an account? </p>
      <button type="button" className='loginbtn1'>
     
        {/* <a href="Login.html">Already have an account? Login</a> */}
        <Link to="/login" class="loginbtn">Login</Link>
      </button>
    </div>
    </div>
    
  )
}

export default SignUp