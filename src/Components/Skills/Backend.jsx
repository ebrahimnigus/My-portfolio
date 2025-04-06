import React from 'react'
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"}} className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box ">
            <div className="skills__group ">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Node Js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Mongodb</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Backend