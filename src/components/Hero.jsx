import { HERO_CONTENT } from "../constants"
import Profilepic from '../assets/contact-img.svg';
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col lg-items-start ">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-4xl font-thin tracking-tight lg:mt-10 lg:text-8xl">Sahil Shingote</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tigher text-justify">{HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-around">
                        <motion.img 
                        initial={{x:100 , opacity:0}}
                        animate={{x:0 ,opacity:1}}
                        transition={{duration:1 ,delay:1.2}} 
                        height={200}
                        width={375}
                        className="rounded-xl"
                        src={Profilepic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero