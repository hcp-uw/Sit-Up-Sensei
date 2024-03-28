import React from 'react';
import LogoAnimated from './LogoAnimated';

function Login() {
    return (
        <div className='Login'>
            <header className='Login-header'>
            <LogoAnimated />
            <h1 className='Login-title'>
                Welcome back!
            </h1>
            <input type="text" className='Input' placeholder="Email Address"/>
            <input type="text" className='Input' placeholder="Password"/>
            <p className="SecondaryButton">
                LOG IN
            </p>
            </header>
        </div>
    )
}

export default Login;