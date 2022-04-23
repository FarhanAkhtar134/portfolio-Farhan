import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me2.png'; 
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>

      <h5>Hello I'm</h5>
      <h1>Muhammad Farhan Akhtar</h1>
      <h5 className="text-light">
        Full Stack Software Developer
      </h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="" />
      </div>

      <a className='scroll__down' href="#contact">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header