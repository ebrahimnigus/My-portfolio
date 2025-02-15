import React from 'react'
import './About.css'
import AboutImg from "../../assets/about.jpg"

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="sectioin__subtitle">My Introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about_img"/>
            <div className="about__data"></div>
        </div>
    </section>
  )
}

export default About