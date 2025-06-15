import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'
import {useState} from 'react';
import { AnimatePresence, motion } from "motion/react"
import logo from "../../assets/images/digitalpathsalalogo.png"
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
    const [close,setClose]= useState(true);
    const navbar_links = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Certification",
    link: "/certification",
  },
];

    const [open,setOpen] = useState(true);
    const handleNavbar = ()=>{
        console.log("this is navbar");
        setOpen(!open);
    }
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <div className='bg-[#4CAF50] p-4 flex flex-row gap-6 items-center md:flex-row md:justify-between text-white relative'>
        <div className='left flex gap-4 items-center cursor-pointer' onClick={handleNavbar}>
            <GiHamburgerMenu className='text-3xl text-white'/>
            <div>
                <h1 className='text-2xl text-white cursor-pointer'>Logo</h1>
            </div>
        </div>
        <div className='center'>
            <h1 className='cursor-pointer text-xl'>DIGITAL PATHSALA</h1>

        </div>
        <div className='right text-xl'>
            <Link>Logout</Link>
        </div>
        <AnimatePresence>
  {open && (
    <motion.div
      initial={{ transform: "translateX(-100px)" }}
      animate={{ transform: "translateX(0)" }}
      exit={{ transform: "translateX(-100px)" }}
      transition={{ duration: 0.65 }}
      className="slidebar absolute w-[230px] top-0 focus:right left-0 bg-[#9664E3] shadow-lg p-4 h-screen z-100"
    >
        <IoIosCloseCircleOutline className="relative left-45 cursor-pointer text-3xl" onClick={handleClose}></IoIosCloseCircleOutline>
      <ul className="flex flex-col space-y-4 items-center">
        <img src={logo} className='w-[100px]'/>
        <hr className='border w-full'></hr>
        {navbar_links.map((item, index) => (
          <li key={index} className="text-white text-lg font-medium">
            <Link to={item.link} className="hover:text-grey-400 transition-colors duration-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>
        

    </div>
  )
}

export default Header