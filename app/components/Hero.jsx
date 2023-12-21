import React from 'react';
import bglogo from '../assets/new.webp';
import Image from 'next/image';


export default function Hero({heading,message}) {
  return (
    <div className="h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
{/*Overlay*/}
<div className='p-5 text-white new-module relative z-10'>
   <a href="/"><Image src={bglogo} alt="Logo"/></a>
</div>
<div className='absolute top-0 left-0 right-0 bottom-0 bg-black/25 z-[2] h-[90vh] custom-div'/>

<div className="p-5 text-white ml-[-15rem] mt-[15rem] float-left black relative z-10 head-module">
  <h2 className="text-5xl w-[70%] font-Raleway">{heading}</h2>
<p className="py-5 text-xl ">{message}</p>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 
    via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
     dark:focus:ring-cyan-800 font-bold rounded-lg px-10 
     py-2.5 text-center me-2 mb-2 text-lg">Learn More</button>
</div>
    </div>
    
  )
}
