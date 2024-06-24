import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/LoginAndSignup.css';

const LoginAndSignup = (props) => {
    const navigate = useNavigate();
  return (
    <div className='ls-page'>
        <div className='ls-container'>
            <div className='ls-header'>{props.heading}</div>
            <div className='ls-body'>
                {props.heading === 'signup' && 
                <div>
                        <p className='ls-label'>UserName</p>
                        <input type='text' className='ls-input'/>
                    </div>} 
                <div>
                        <p className='ls-label'>Email</p>
                        <input type='email' className='ls-input'/>
                    </div> 
                    <div>
                        <p className='ls-label'>Password</p>
                        <input type='password' className='ls-input'/>
                    </div> 

                    <div >
                    {props.heading === 'login' ? 
                        <div className='ls-notify'>New User? <p onClick={() => navigate('/signup')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Sign up</p></div> : 
                        <div className='ls-notify'>Already a user? <p onClick={() => navigate('/login')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Login</p></div>}
                    </div>
                    <div className='ls-button'>
                        {props.heading}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default LoginAndSignup