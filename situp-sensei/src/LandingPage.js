import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import LogoAnimated from './LogoAnimated';

function TypingText() {
    return (
        <TypeAnimation
            preRenderFirstString={false}
            sequence={[
                500,
                'VERY STRONK',
                1000,
                'NECK GROW BIG',
                1000,
                'BADA BING BADA BOOM',
                1000,
                'HAIYA! POW!',
                500,
            ]}
            speed={10}
            style={{
                fontSize: '1rem',
                fontFamily:  "Saira",
                paddingBottom: '1rem',
            }}
            repeat={Infinity}
        />
    );
}

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <LogoAnimated />
                <h1 className="App-title">
                    Sit-Up Sensei
                </h1>
                <TypingText />
                <Link to="/signup">
                    <p className="PrimaryButton">
                        CREATE ACCOUNT
                    </p>
                </Link>
                <Link to="/login">
                    <p className="SecondaryButton">
                        LOG IN
                    </p>
                </Link>
            </header>
        </div>
    )
}

export default LandingPage;