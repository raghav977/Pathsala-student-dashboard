import React from 'react'
import {motion} from 'motion/react'
import profile from '../../assets/images/userprofile.svg'
const UserProfile = () => {
  return (
    <motion.div 
    initial={{transform:"translateX(20px)"}}
    animate={{transform:"translateX(0px)"}}
    className=' flex items-center justify-between m-auto mt-4'>
        <div className='left'>

        <input type='text border border-black box-shadow-sm' placeholder='search'></input>
        </div>
        <div className='right flex gap-4 items-center justify-center'>
            <img src={profile} className='w-18 rounded-[50%] border'/>
            <div>
            <h1 className='text-xl'>Raghav Dahal</h1>
            <h1>Joined-2025/06/15</h1>
            </div>
            
        </div>
        
    </motion.div>
  )
}

export default UserProfile