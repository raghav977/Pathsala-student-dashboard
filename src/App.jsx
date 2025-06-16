import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Firstinterface from './pages/Firstinterface'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstinterface/>}></Route>
        <Route path="/student/home" element={<Home/>}></Route> 
        <Route path="/student/course/:id" element={<CourseDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
