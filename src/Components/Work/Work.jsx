import React from 'react'
import "./Work.css"
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>
        <Works />
    </section>
  )
}

export default Work