import React from 'react'
import './Contact.css'
import map from '../../assets/images/map.png'
const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact {'('} {')'}</h1>
      <div className='container'>
        <div className='left-side'>
            <img src={map} alt="" />
        </div>
        <div className='right-side'>
            <h2>
                GET IN TOUCH
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate!</p>
            <form action="" className='form'>
                <input type="text" placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <input type="number" placeholder='Phone Number' required/>
                <input type="text" placeholder='How did you find us' required/>
                <button>SEND</button>
            </form>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
