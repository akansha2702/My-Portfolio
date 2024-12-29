import React from 'react'
import CV from '../../assets/cvv.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1Q3iC7OnLiDLpzw69DQNqNdMGZ-X8EkON/view?usp=sharing" target='_blank' download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      
    </div>
  )
}

export default CTA
