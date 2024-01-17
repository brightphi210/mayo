import React, { useState } from 'react'
import './ContactCompo.scss'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();




const ContactCompo = () => {

    const [show, setShow] = useState(false)




  return (
    <div className='contactSession'>
      <div className='contactCard' data-aos="fade-up" data-aos-duration="3000">
        <h2> Book a session now</h2>
        <p>
          Talk to us, about what you want, 
          and we’ll respond as soon as you submit:
        </p>
      </div>


      <div className='formDiv' data-aos="fade-up" data-aos-duration="3000">
        <form action="" >




            <div className='inputDiv'>
                <label htmlFor="">Name</label>
                <input type="text" id='name' name='user_name' placeholder='Provide Name: ' required/>
            </div>

            <div className='inputDiv'>
                <label htmlFor="">Number</label>
                <input type="text" id='phone' name='user_number' placeholder='Provide Number: 'required/>
            </div>


            <div className='inputDiv'>
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                
                placeholder='Provide Email: ' required/>

            </div>

            <div className='inputDiv'>
              <label className='textLabel'>
                Talk to us, about what you want, and we’ll respond as soon as you submit:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Great, so what would you like us to do for you 😁' required>
              </textarea>
            </div>

            <button type="submit">Submit</button>
          
        </form>
        
      </div>


        <div>
          {show && (<div>
            <div className='modal'>
            <div className='modal-content'>
              <h2>Message Sucessfully</h2>
              <p>Message has been sent successfully, you will recieve a reply shortly</p>
              <button onClick={()=>{setShow(false)}}>Close</button>
            </div>
          </div>
          </div>)}
        </div>
      
    </div>
  )
}

export default ContactCompo