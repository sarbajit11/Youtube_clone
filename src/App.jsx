import { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

function App() {
  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/Video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </>
  )
}

export default App