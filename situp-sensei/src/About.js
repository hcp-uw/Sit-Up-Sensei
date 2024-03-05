import React from 'react';
import simon from './simonn.jpg';

function About() {
    return (
        <div className="flex items-center justify-center">
            <div className="mt-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-end mx-auto">
                <CreateAboutCard imageName={simon} name={"Simon Kurgan"} title={"Programmer (Brain)"} linkedin={"https://www.linkedin.com/in/simon-kurgan/"}/>
                <CreateAboutCard imageName={simon} name={"Simon Kurgan"} title={"Programmer (Brain)"} linkedin={"https://www.linkedin.com/in/simon-kurgan/"}/>
                <CreateAboutCard imageName={simon} name={"Simon Kurgan"} title={"Programmer (Brain)"} linkedin={"https://www.linkedin.com/in/simon-kurgan/"}/>
                <CreateAboutCard imageName={simon} name={"Simon Kurgan"} title={"Programmer (Brain)"} linkedin={"https://www.linkedin.com/in/simon-kurgan/"}/>
            </div>
        </div>
    )
}

function CreateAboutCard(props) {
    return (
        <div className="aboutUsCard flex w-96 m-5 items-center border border-black-800 rounded-lg shadow dark:bg-white-800">
            <img className="w-32 m-5 rounded-full" src={props.imageName} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{props.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.title}</p>
                <a className="" href={props.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg className="transform hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759" fill="black" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About;