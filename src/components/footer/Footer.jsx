import React from 'react'
import './footer.css'
import  {FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AKANSHA</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/akansha-aggarwal-991780204/' target='_blank'><FaLinkedinIn/></a>
        <a href='https://www.instagram.com/_akansha_aggarwal_/' target='_blank'><FiInstagram/></a>
        <a href='https://twitter.com/Akansha272' target='_blank'><IoLogoTwitter/></a>
        <a href='https://github.com/akansha2002' target='_blank'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
