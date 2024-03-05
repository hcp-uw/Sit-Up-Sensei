import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">
                Sit-Up Sensei
                </h1>
                <p>

                </p> 
                <Link to="/">
                    <p className="PrimaryButton">
                        CREATE ACCOUNT
                    </p>
                </Link>
                <Link to="/">
                    <p className="SecondaryButton">
                        LOG IN
                    </p>
                </Link>
                <Link to="/webcam">
                    <p className="PrimaryButton">
                        WEBCAM PAGE
                    </p>
                </Link>
            </header>
        </div>
    )
}

export default LandingPage;