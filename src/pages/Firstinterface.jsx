import React from 'react'
import background from '../assets/images/background.jpg'
import { FaGoogle } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Firstinterface = () => {
    const navigate = useNavigate();
  return (
    <div style={{backgroundImage:`url(${background})`,
    backgroundSize:'cover',
    height:'100vh'}}>
        <div className='center gap-4 text-white flex flex-col items-center justify-center h-[100vh]' >
            <h1 className='text-4xl'>Welcome to डिजिटल पाठशाला</h1>
            <h2 className='text-2xl'>Providing quality education at an affordable price in our aim</h2>
            <div className='flex gap-4 items-center justify-center border p-4 bg-white text-black text-2xl'>
            <FaGoogle />
            <Link className='cursor-pointer' onClick={navigate("/student/home")}>Sign in With Google</Link>
            </div>
        </div>

    </div>
  )
}

export default Firstinterface