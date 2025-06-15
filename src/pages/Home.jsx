import React from 'react'
import Header from './components/Header'
import Top from './components/Top'
import UserProfile from './components/UserProfile'
import Card from './components/Card'

const Home = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <div className='max-w-[1200px] m-auto p-2'>

        <UserProfile/>
        <Card/>
        </div>
    </div>
  )
}

export default Home