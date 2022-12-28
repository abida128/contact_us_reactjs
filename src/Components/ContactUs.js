import React from 'react';
import emailjs from 'emailjs-com';



const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i4pegra', 'template_404p1st', e.target, 'xZcJgZwCuaRA7ISaP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
     
  return (

   
    <div className='container  max-w-xs text-center rounded font-bold  mt-5 '>
            <div className='header font-bold italic text-4xl text-blue-700'>
              <h1>Contact Us!</h1>
              </div>
        <form className='bg-gray-500 shadow-md rounded px-2 py-2 pt-5 pb-3 mb-2 ' onSubmit={sendEmail}>
        <div className='mt-2 text-blue-700 '>
                <label >Name</label>
                </div>
            <div className=''>    
                <input type="name" name='name' className='rounded  h-10 px-4 py-4 text-sm ' placeholder='Enter your name' required />
            </div>

            <div className='mt-2 text-blue-700'>
                <label >Email Address</label>
                </div>
            <div className=''>    
                <input type="email" name='user_email' className='rounded h-10 px-4 py-4 text-sm' placeholder='Enter your email' required />
            </div>
            
            <div className='mt-2 text-blue-700'>
                <label>Message</label>
            </div>
            <div>
            <textarea name="message" className='rounded  pt-2 px-6 text-sm overflow-hidden '  placeholder='Leave a message here...' required ></textarea>

            </div>
            <div>
                <button className='rounded h-7 bg-blue-700 text-white p-2 font-bold'  type='submit' >Submit</button>
            </div>
            
        </form>
    </div>
 
  )
}

export default ContactUs;