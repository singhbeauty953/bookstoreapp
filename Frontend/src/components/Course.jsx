import React from 'react'
import Cards from './Cards'
import {Link} from "react-router-dom"
import list from '../../public/list.json';

function Course() {

  return (
   <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    <div className='items-center justify-center text-center  dark:bg-slate-900 dark:text-white  '>
      <h1 className=' mt-24 text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptas possimus similique ab, magnam temporibus voluptatum earum accusamus itaque libero tenetur incidunt beatae, asperiores, odit consequuntur suscipit repudiandae exercitationem illum sapiente a unde animi commodi atque. Necessitatibus, quaerat ad! Nisi suscipit, fuga in porro animi ex optio repudiandae nesciunt molestias.</p>
      <Link to= "/">
      <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
      </Link>
      <div>
      <div className='mt-12 grid grig-cols-1 md:grid-cols-4'>
     
     {
       list.map((item)=>(
         <Cards key={item.id} item={item}/>
        
       ))
     }
 
     </div>
      </div>
    </div>
  

    </div>
   </>
  )
}

export default Course
