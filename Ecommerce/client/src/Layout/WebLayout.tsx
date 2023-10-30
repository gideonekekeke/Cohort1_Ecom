import React from 'react'
import Header from '../Components/Blocks/Header'
import { Outlet } from 'react-router-dom'

const WebLayout:React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default WebLayout