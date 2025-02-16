import React from 'react'
import Sidebar from '../components/Sidebar'
import '../assets/styles/Home.css'

function Home() {
  return (
    <div className="general-container">
        <Sidebar />
        <div className="content-wrapper">
            Hello
        </div>
    </div>
  )
}

export default Home