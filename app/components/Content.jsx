import React from 'react';
import left from '../assets/left.png';
import right from '../assets/right.png';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="flex justify-around items-center content-module">
      <div className="content-module1">
      <Image src={left}/>
      </div>
      <div className="text-slate-950 text-center text-2xl content-module2">
       <p>
       Only KredX's AP Solution Lets You Automate And Streamline Your Entire
        PO-to-Pay Process Without Messing Up Your Existing Process. That's
        Because We Support All Native Functionality For 40+ ERP's
       </p>
      </div>
      <div className="content-module3">
      <Image src={right}/>
      </div>
    </div>
  )
}
