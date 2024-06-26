import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/LoginAndSignup.css';

const LoginAndSignup = (props) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errors, setErrors]= useState({});

    const validateUserData = (username, email, password) => {
        const errors = {};
    
        // Validate username
        if(props.heading !== 'login') {
            if (!username) {
                errors.username = "Username is required";
            } else if (username.length < 6) {
                errors.username = "Username must be at least 6 characters long";
            }
        }
        
    
        // Validate email
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            errors.email = "Email is not valid";
        }
    
        // Validate password
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        if(errors && errors.username || errors.email || errors.password) {
            return setErrors(errors);
        } else {
            // call the API
            setErrors({});
        }
    
    };

    // useEffect(() => {
    //     validateAndAllowLogin();
    // }, [email, password, userName])

    // const validateAndAllowLogin = () => {
    //     const condition = props.heading === 'login' ? email && password && email.length > 10 && password.length >= 8 : email && password && userName && email.length > 10 && password.length >= 8 && userName.length > 6 
    //     if(condition) {
    //         setIsButtonDisabled(false);  
    //     } else {
    //         setIsButtonDisabled(true);
    //     }
    // }

    

  return (
    <div className={props.heading === 'login' ? 'ls-page-login': 'ls-page-signup'}>
        <div className='ls-container'>
            <div className='ls-header'>{props.heading}</div>
            <div className='ls-body'>
                {props.heading === 'signup' && 
                <div>
                        <p className='ls-label'>UserName</p>
                        <input type='text' className='ls-input' onChange={(e) => setUserName(e.target.value)} value={userName}/>
                        {errors.username && <div>{errors.username}</div>}
                    </div>} 
                <div>
                        <p className='ls-label'>Email</p>
                        <input type='email' className='ls-input' onChange={(e) => setEmail(e.target.value)} value={email}/>
                        {errors.email && <div>{errors.email}</div>}
                    </div> 
                    <div>
                        <p className='ls-label'>Password</p>
                        <input type='password' className='ls-input'onChange={(e) => setPassword(e.target.value)} value={password}/>
                        {errors.password && <div>{errors.password}</div>}
                    </div> 

                    <div >
                    {props.heading === 'login' ? 
                        <div className='ls-notify'>New User? <p onClick={() => navigate('/signup')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Sign up</p></div> : 
                        <div className='ls-notify'>Already a user? <p onClick={() => navigate('/login')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Login</p></div>}
                    </div>
                    <button className='ls-button' onClick={() => validateUserData(userName, email, password)}>
                        {props.heading}
                    </button>
                </div>
        </div>
    </div>
  )
}

export default LoginAndSignup