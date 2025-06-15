import React from 'react'
import { CiStar } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRef,useState } from 'react';



const Top = () => {
   const {uref}= useRef();
   const [close,setClose] = useState(false);
   

   const handleClose = ()=>{
    console.log("this is handle close");
    setClose(true);
    
    return;
   }

  return (
    <div>
  {!close && (
    <div
      className="border flex flex-col justify-center items-center md:flex-row md:items-center md:justify-center w-full bg-[#8A0000] text-white p-6 relative gap-4"
      ref={uref}    
    >
      <div className="flex-1 md:ml-78 w-full md:w-auto text-center md:text-left space-y-2">
        <div className="flex items-center justify-center md:justify-start gap-2 text-lg md:text-xl">
          <CiStar className="text-yellow-300" />
          <h2 className="font-semibold">Share Your Honest Thoughts</h2>
          <CiStar className="text-yellow-300" />
        </div>
        <p className="text-sm md:text-base">
          Your review helps future students choose better. What did you really think of our course?
        </p>
      </div>

      <div className="flex-shrink-0 mt-4 md:mt-0">
        <Link className=" hover:text-yellow-200 border bg-[#2ECC71] p-2 rounded-xl">Review Now</Link>
      </div>
      <div className="absolute top-2 right-2 md:right-4">
        <IoIosCloseCircleOutline
          className="text-2xl md:text-3xl cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </div>
  )}
</div>

  )
}

export default Top