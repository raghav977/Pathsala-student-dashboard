import React from 'react'
import learning from '../../assets/images/learning.svg'
import {motion} from "motion/react"
const Card = ({ date = "September 4, 2025", user = "John" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-4 p-6 flex flex-col md:flex-row items-center justify-between rounded-xl bg-[#4CAF50] text-white shadow-2xs">
      <div className="left mb-4 md:mb-0">
        <div className="date mb-2">
          <p className="text-sm">{date}</p>
        </div>
        <div className="welcome-back text-2xl font-bold mb-1">
          <h1>Welcome back, {user}!</h1>
        </div>
        <div className="updated text-md">
          <h1>Always stay updated in your student portal</h1>
        </div>
      </div>

      <div className="right">
        <img src={learning} alt="Learning" className="w-[250px] max-w-full" />
      </div>
    </motion.div>
  )
}

export default Card