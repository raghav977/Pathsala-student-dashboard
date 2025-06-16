import React from 'react'
import Header from './components/Header'
import Top from './components/Top'
import UserProfile from './components/UserProfile'
import Card from './components/Card'
import Courses from './components/Courses'
import Assignment from './components/Assignment'
import Certification from './components/Certification'

const Home = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <div className='max-w-[1200px] m-auto p-2'>

        <UserProfile/>
        <Card/>
        <Courses/>
        {/* <Assignment/> */}
        <h1 className='mt-4  w-full text-2xl text-green-800'>My Certificates</h1>
        <Certification/>
        </div>
    </div>
  )
}

export default Home