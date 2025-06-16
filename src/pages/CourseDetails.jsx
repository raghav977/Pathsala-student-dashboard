import React from 'react'
import Top from './components/Top'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Card from './components/Card'
import CourseDetailLayout from './CourseDetailLayout'

const CourseDetails = () => {
  return (
      <>
      <Top/>
        <Header/>
        <div className='max-w-[1200px] m-auto p-2'>
        {/* <UserProfile/> */}  
        </div>
        <CourseDetailLayout/>
      </>
  )
}

export default CourseDetails