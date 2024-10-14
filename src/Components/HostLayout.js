import React from 'react'
import { Outlet } from 'react-router-dom'
import MiniHeader from './Hosts/MiniHeader'

const HostLayout = () => {
  return (
    <div>
        <MiniHeader/>
        <Outlet/>
    </div>
  )
}

export default HostLayout