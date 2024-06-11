import React from 'react'
import logo from "../assets/Rutik_shingote__1_-removebg-preview.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className=" mb-10 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='-mx-3 lg:mx-5 ' width={100} src={logo} alt='logo' />
            </div>
            <div className='m-7 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/sahil-shingote/" target="_blank">
                    <FaLinkedin className='cursor-pointer' />
                </a>
                <a href="https://github.com/Rutikrtr"  target="_blank">
                    <FaGithub className='cursor-pointer' />
                </a>
                
                <a href="https://www.instagram.com/rutikrtr/?igsh=MWF0bXphODMyMHUycg%3D%3D" target='_blank'>
                    <FaInstagram className='cursor-pointer' />
                </a>
               
                
            </div>
        </nav>

    )
}

export default Navbar