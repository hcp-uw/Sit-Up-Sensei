import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <motion.img
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                />
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