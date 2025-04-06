import React from 'react'
import  { motion } from "framer-motion";
const Uiux = () => {
  return (
    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"}} className="skills__content ui/ux">
        <h3 className="skills__title">UI/UX Designer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Experienced</span>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Uiux