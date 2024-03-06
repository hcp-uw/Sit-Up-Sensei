import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Image(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <section>
          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img src={props.id} className={props.classText} alt="" onLoad={() => setIsLoaded(true)} />
          </motion.div>
        </section>
    );
}

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
                <Image id={logo} classText="App-logo"/>
                <h1 className="App-title">
                    Sit-Up Sensei
                </h1>
                <TypingText />
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