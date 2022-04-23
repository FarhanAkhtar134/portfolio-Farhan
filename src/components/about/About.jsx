import React from 'react';
import './about.css';
import ME from '../../assests/Farhan Akhtar img2.jpg'
import {FaAward} from 'react-icons/fa'
import {HiAcademicCap} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <HiAcademicCap className="about__icon" />
              <h5>Education</h5>
              <small>Final Year BEng undergraduate</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Final year undergraduate Electrical Engineering and Software
            Technology student with hands-on experience in electronics digital
            design, IoT, Web development, Machine Learning and programming including object-oriented and functional
            programming languages. Supportive and enthusiastic team player
            dedicated to streamlining processes and efficiently resolving
            project issues.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About