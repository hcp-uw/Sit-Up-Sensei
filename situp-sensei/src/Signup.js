import React from 'react';
import LogoAnimated from './LogoAnimated';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='Signup'>
            <header className='Signup-header'>
            <LogoAnimated />
            <h1 className='Signup-title'>
                Welcome!
            </h1>
            <p>
                Protect the neck that helps you tech.
            </p>
            <input type="text" className='Input' placeholder="Email Address"/>
            <input type="text" className='Input' placeholder="Password"/>
            <input type="text" className='Input' placeholder="Confirm Password"/>
            <p className="SecondaryButton">
                SIGN UP
            </p>
            <p>
                Already have an account? <Link to='/login'><b><u>Log In</u></b></Link>
            </p>
            </header>
        </div>
    )
}

export default Signup;