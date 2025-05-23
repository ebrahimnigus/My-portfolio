import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon" onClick={() => toggleTab(1)}></i>
                    <h3 className="services__title">Full Stack <br/> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Full Stack Developer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop robust web applications.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I design intuitive user interfaces.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I architect scalable backend systems.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I integrate APIs and cloud services.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I optimize performance and reliability.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon" onClick={() => toggleTab(2)}></i>
                    <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I design intuitive and user-friendly interfaces.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create seamless digital user experiences.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I craft engaging and accessible UI designs.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I enhance usability through thoughtful UX design.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I build interactive and visually appealing designs.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon" onClick={() => toggleTab(3)}></i>
                    <h3 className="services__title">Visual <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Services
