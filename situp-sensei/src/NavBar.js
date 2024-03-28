import logo from './logo.svg';
import star from './star.png';
import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav class="bg-white dark:bg-white-900 fixed w-full z-20 top-0 start-0 border-2 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Sit Up Sensei Logo" />
                    <span class="self-center text-2xl font-semibold">Sit-Up Sensei</span>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to='/dashboard'>
                        <img src={star} className="h-8 Star-logo" alt="Ninja Star"/>
                    </Link>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-20 ml-1" id="navbar-sticky">
                    <ul class="flex flex-col md:p-0 font-medium rounded-lg rtl:space-x-reverse md:flex-row">
                        <Link to="/dojo">
                            <p className="m-2 navLinks">DOJO</p>
                        </Link>
                        <Link to="/">
                            <p className="m-2 navLinks">HOME</p>
                        </Link>
                        <Link to="/about">
                            <p className="m-2 navLinks">ABOUT</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;