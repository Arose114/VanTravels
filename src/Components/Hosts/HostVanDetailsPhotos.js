import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanDetailsPhotos = () => {
  const [van]=useOutletContext()

  return (
    <div>
    
      <img src={van.imageUrl} alt={van.name} className='rounded mt-3 w-50 img img-fluid' height='400'/>
      
      </div>
  )
}

export default HostVanDetailsPhotos