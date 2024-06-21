import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const navigate = useNavigate();
 const navigateToSignup = () => {
    console.log('this button is clicked');
    navigate('/signup');
 }
  return (
    <div onClick={navigateToSignup}>Login</div>
  )
}

export default Login;