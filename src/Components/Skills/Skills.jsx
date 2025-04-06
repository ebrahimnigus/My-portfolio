import React, {useEffect, useRef} from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Uiux from './Uiux'

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a delay based on the index to animate elements one by one
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 300); // 300ms delay between each element
          }
          // Do not remove the 'show' class when the element goes out of view
        });
      },
      { threshold: 0.5 } // Adjust the threshold to 0.5 to reduce vibration
    );

    const skillBoxes = skillRef.current.querySelectorAll('.skills__content');
    skillBoxes.forEach((box) => observer.observe(box));

    return () => skillBoxes.forEach((box) => observer.unobserve(box));
  }, []);

  return (
    <section className="skills section" id="skills" ref={skillRef}>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Uiux />
        </div>
    </section>
  )
}

export default Skills

    
    