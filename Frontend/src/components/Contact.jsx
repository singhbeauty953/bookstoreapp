import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
function Contact() {
  return (
 <div>
     <Navbar/>
     <div className=' justify-center item-center'style={{paddingTop: 150, paddingBottom:200,}}>
     <div className='max-w-md w-full mx-auto p-6  bg-gray-800 rounded-lg shadow-md justify-center item-center w-[100%] '>
      <h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact us</h2>
      <form action="">
        <div className='mb-4'>
          <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Name</label>
          <input placeholder='Your Name' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500' required type="text" />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Email</label>
          <input placeholder='name@examle.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-nonefocus:border-blue-500' required type="email" />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-semibold mb-2' htmlFor="">Your Message</label>
          <textarea rows='4' placeholder='Type your message' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500' required type="text" />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white'>
            Send Message
          </button>
        </div>
      </form>
      </div>
      </div>
     <Footer/>
 
 </div>
  )
}

export default Contact