import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Skills from '../../components/Skills/Skills'
import Project from '../../components/Projects/Project'
import Journey from '../../components/Journey/Journey'
import Education from '../../components/Education/Education'
import Testimonial from '../../components/Testimonial/Testimonial'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <About/>
      <Skills/>
      <Project/>
      <Journey/>
      <Education/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Home
