import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='about-heading'>aboutMe ( )</h1>
      <div className='about-div'>
        <div className='about-left-div'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et obcaecati eligendi! Voluptates rem magni explicabo eum tempore iste nisi quae odit nesciunt numquam accusamus eos veniam doloribus dolores, nulla dolorum autem. Repellendus quaerat suscipit earum cupiditate architecto rem rerum dignissimos iusto ullam animi quasi, quis, quas eum facilis repudiandae dolor, accusantium expedita exercitationem! Dolorem earum sequi nisi ullam repellendus? Alias iusto architecto voluptates soluta porro consequuntur dolores facilis modi.</p>
        </div>
        <div className='about-right-div'>
            <div className='right-subDiv'>
               <div className='subDiv-div'>
                   <h3>Backend Developer</h3>
                   <a href="#projects">Projects</a>
               </div>
               <p className='arrow-icon'> {" "}
          &lt;  /&gt;</p>
            </div>
            <div className='right-subDiv'>
               <div className='subDiv-div'>
                  <h3>Freelancer</h3>
                  <a href="mailto:aryaveerkanwar11458@gmail.com">Hire me</a>
               </div>
               <p>{'{'} {'}'}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
