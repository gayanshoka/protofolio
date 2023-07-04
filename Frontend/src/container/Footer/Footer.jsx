import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';


import './Footer.scss';

const Footer = () => {
    const [formData, setFromData] = useState({name:'', email: '', massage: ''});
    const [isFormSubmitted, setisFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, message} = formData;

    const handleChangeInput = (e) => {
        const { name, value} = e.target;

        setFromData({...formData, [name]: value});
    }


    const handleSubmit = () => {
      setLoading(true);
      
      const contact = {
         _type: 'contact',
         name: name,
         email: email,
         message: message,

      }

      client.create(contact)
      .then(()=>{
        setLoading(false);
        setisFormSubmitted(true);
      })

    }
  return (
    <>
    <h2 className="head-text">You Can Contact Me & Give Some feedback Hear</h2>

    <div className="app__footer-cards">
          
          <div className="app__footer-card">

         <img src={images.email} alt="email" />
           <a href="mailto:gayanmad03@gmail.com" className="p-text">
                      gayanmad03@gmail.com 
           </a>

          </div>

          <div className="app__footer-card">

         <img src={images.mobile} alt="mobile" />
           <a href="tel: +94 763969014" className="p-text">
           tel: +94 763969014
           </a>

          </div>


    </div>

    {!isFormSubmitted ?
    
    <div className="app__footer-form app__flex">

        <div className="app__flex">

         <input className="p-text" type="text" name="name" placeholder="Your Name" value={name} onChange={handleChangeInput}/>

        </div>
        <div className="app__flex">

         <input className="p-text" type="email" name="email" placeholder="Your Email" value={email} onChange={handleChangeInput}/>

        </div>
     
     <div>
        <textarea
           className="p-text"
           placeholder="Your Message"
           value={message}
           name="message"
           onChange={handleChangeInput}
        
        
         />

     </div>

         <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Send' : 'Massege'}</button>

    </div>
      :
      <div>
        <h3 className="head-text">Thank you</h3>
      </div>}




    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);