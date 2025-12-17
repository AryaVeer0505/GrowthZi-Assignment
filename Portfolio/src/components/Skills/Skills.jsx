import React from 'react'
import './Skills.css'
import {imageData} from '../../assets/assets.js'
const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='skills-heading'>Skills ( )</h1>
      <div className='imageData'>
        {
            imageData.map((img,index)=>(
                <img className='image' key={index} src={img}/>
            ))
        }
      </div>
    </div>
  )
}

export default Skills
