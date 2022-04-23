import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide digital solutions for end user interaction.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perform task analyses for user experience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create easy, efficient, relevant and all rounded pleasant
                experiences for user.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design attractive, guiding and responsive user interface.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Enrich and simplify user experience with visually appealing UI/UX
                design.
              </p>
            </li>
          </ul>
        </article>

{/* End of UI/UX design */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop front-end and back-end applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide Web application solutions for various business use cases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrate third party services such as Stripe, google maps etc. to develop full-stack apps.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design and implementation with SQL and NoSQL technologies.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                API development including REST and GraphQL.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Rigorous Automated testing including unit test, Mocking and Integration test.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Machine Learning/Data Science</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data analysis using python frameworks such as skicit-learn.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing Machine learning models using supervised and unsupervised learning.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Data visualisation using python frameworks such as Matplotlib and Seaborn.  
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Predictive monitoring with Neural Networks i.e ANN, RNN.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Computer Vision and AI model implementation for various use cases.  
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services