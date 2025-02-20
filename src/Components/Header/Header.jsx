import React from 'react'
import "./header.css"
import { useState } from 'react'

const Header = () => {
   /* ====== Change Background Header ======*/
   window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    //when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
});


  /* ====== Toggle Menu ======*/

  const [Toggle, showMenu] = useState(false);
  const[activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Ebrahim</a>

        <div className={Toggle ? 'nav__menu show-menu': 'nav__menu'}>
          <ul className="nav__list">
            <li className="nav__list grid">
              <a href="#home" onClick={() => setActiveNav("#home")} className = { activeNav === '#home'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav_icon">
                </i> Home
              </a>
            </li>
            <li className="nav__list grid">
              <a href="#about" onClick={() => setActiveNav("#about")} className= { activeNav === '#about'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav_icon">
                </i> About
              </a>
            </li>
            <li className="nav__list grid">
              <a href="#skills" onClick={() => setActiveNav("#skills")} className= { activeNav === '#skills'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav_icon">
                </i> Skills
              </a>
            </li>
            <li className="nav__list grid">
              <a href="#services" onClick={() => setActiveNav("#services")} className= { activeNav === '#services'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav_icon">
                </i> Services
              </a>
            </li>
            <li className="nav__list grid">
              <a href="#projects" onClick={() => setActiveNav("#projects")} className= { activeNav === '#projects'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav_icon">
                </i> Projects
              </a>
            </li>
            <li className="nav__list grid">
              <a href="#contact" onClick={() => setActiveNav("#contact")} className= { activeNav === '#contact'? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav_icon">
                </i> Contact
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header