import React, { useState } from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => {
    const [webcamIsOn, setWebcamIsOn] = useState(false);

    const [webcamStartText, setWebcamStartText] = useState("START WEBCAM");

    const [borderToggle, setBorderToggle] = useState(false);

    const webcamClass = `mt-5 relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 dark:border-gray-600 ${borderToggle ? 'border-2' : 'border-none'}`;

    const toggleWebcam = () => {
        if (webcamStartText === "START WEBCAM") {
            setWebcamStartText("STOP WEBCAM");
            setWebcamIsOn(true);
            setBorderToggle(true);
        } else {
            setWebcamStartText("START WEBCAM");
            setWebcamIsOn(false);
            setBorderToggle(false);
        }
    };

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <p onClick={toggleWebcam} className="PrimaryButton">
                {webcamStartText}
            </p>
            <div className={webcamClass}>
                {webcamIsOn && <Webcam
                    audio={false}
                    height={600}
                    screenshotFormat="image/jpeg"
                    width={1000}
                    videoConstraints={videoConstraints}
                    mirror="true"
                />}
            </div>
        </div>
    );
}

function WebcamPage() {
    return (
        <div className="mt-28 flex flex-col items-center justify-center">
            <div className="">
                <WebcamComponent />
            </div>
        </div>
    )
}

export default WebcamPage;