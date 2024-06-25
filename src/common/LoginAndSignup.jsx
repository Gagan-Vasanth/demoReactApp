import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/LoginAndSignup.css';

const LoginAndSignup = (props) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        validateAndAllowLogin();
    }, [email, password, userName])

    const validateAndAllowLogin = () => {
        const condition = props.heading === 'login' ? email && password && email.length > 10 && password.length >= 8 : email && password && userName && email.length > 10 && password.length >= 8 && userName.length > 6 
        if(condition) {
            setIsButtonDisabled(false);  
        } else {
            setIsButtonDisabled(true);
        }
    }

    

  return (
    <div className='ls-page'>
        <div className='ls-container'>
            <div className='ls-header'>{props.heading}</div>
            <div className='ls-body'>
                {props.heading === 'signup' && 
                <div>
                        <p className='ls-label'>UserName</p>
                        <input type='text' className='ls-input' onChange={(e) => setUserName(e.target.value)} value={userName}/>
                    </div>} 
                <div>
                        <p className='ls-label'>Email</p>
                        <input type='email' className='ls-input' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div> 
                    <div>
                        <p className='ls-label'>Password</p>
                        <input type='password' className='ls-input'onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div> 

                    <div >
                    {props.heading === 'login' ? 
                        <div className='ls-notify'>New User? <p onClick={() => navigate('/signup')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Sign up</p></div> : 
                        <div className='ls-notify'>Already a user? <p onClick={() => navigate('/login')} style={{ marginLeft: '4px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700}}>Login</p></div>}
                    </div>
                    <button className='ls-button' disabled={isButtonDisabled} onClick={(e) => console.log(e)}>
                        {props.heading}
                    </button>
                </div>
        </div>
    </div>
  )
}

export default LoginAndSignup