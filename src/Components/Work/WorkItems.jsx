import React from 'react'
import { motion } from "framer-motion";

const WorkItems = ({item}) => {

  return (
    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }} 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.2 }} className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <p className="work__tech">TechStack: {item.TechStack}</p>
        <div className='work_flex'>
          <a href={item.preview} className="work__preview" target="_blank" rel="noopener noreferrer">Preview <i class="uil uil-eye"></i></a>
          <a href={item.href} className='work__button' target="_blank">
              View Code<i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
    </motion.div>
  )
}

export default WorkItems