import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";

import { SiMysql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";

import { motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <AiOutlineHtml5 className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-sky-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className='text-7xl text-orange-300' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiNodejs className='text-7xl text-green-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <AiOutlinePython className='text-7xl text-blue-600' />
                </motion.div>



            </div>
        </div>
    )
}

export default Technologies