import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Skills from '../../components/Skills/Skills'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
