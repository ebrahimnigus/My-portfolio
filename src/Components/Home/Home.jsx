import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from'./ScrollDown'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 20 }} // Fade in + Slide up
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, ease: "easeOut" }} className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />
                <div className="home__img"></div>
                <Data />
            </div>
            <ScrollDown />
        </div>
    </motion.section>
  )
}

export default Home