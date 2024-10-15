import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanDetailsPricing = () => {
  const [van]=useOutletContext()

  return (
    <div className='row mt-3'>

    
      <p><span className='fw-bold'>${van.price}</span>/day</p>
    </div>
  )
}

export default HostVanDetailsPricing