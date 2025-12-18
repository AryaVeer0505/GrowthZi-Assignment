import React from 'react'
import './Contact.css'
import map from '../../assets/images/map.png'
const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact {'('} {')'}</h1>
      <div className='contact-container'>
        <div className='contact-left-side'>
            <img src={map} alt="" />
        </div>
        <div className='contact-right-side'>
            <h2 className='right-heading'>
                GET IN <span>TOUCH</span>
            </h2>
            <p className='right-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate!</p>
            <form action="" className='form'>
                <input type="text" placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <input type="number" placeholder='Phone Number' required/>
                <input type="text" placeholder='How did you find us' required/>
                <button>SEND</button>
            </form>
            <div className='contact-details'>
                <div className='details'>
                 <i class="fa-solid fa-phone img"></i>
                    <div className='sub-details'>
                        <p className='key'>Phone</p>
                        <p className='value'>7018800377</p>
                    </div>
                </div>
                <div className='details'>
                 <i class="fa-solid fa-fax img"></i>
                    <div className='sub-details'>
                        <p className='key'>Fax</p>
                        <p className='value'>7018800377</p>
                    </div>
                </div>
                 <div className='details'>
                 <i class="fa-regular fa-envelope img"></i>
                    <div className='sub-details'>
                        <p className='key'>Email</p>
                        <p className='value'>aryaveerkanwar11458@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
