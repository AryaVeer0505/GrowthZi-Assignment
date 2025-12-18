import React from 'react'
import './Testimonial.css'
import { testimomialData } from '../../assets/assets'
const Testimonial = () => {
  return (
    <div className='testimonial'>
      <h1>Testimonials {'('} {')'}</h1>
      <div className='testimonial-list'>
        {
            testimomialData.map((item,index)=>(
                <div key={index} className='testimonial-card'>
                      <div className='card-sub-div'>
                         <img src={item.image} alt="" />
                         <h2>{item.name} , {item.role}</h2>
                      </div>
                     <p>{item.feedback}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Testimonial
