import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanDetailsDescription = () => {
  const [van]=useOutletContext()

  return (
    <div className='mt-3'>
      <section>
        <h5 className='mb-2'><span className='fw-bold'>Name:</span> {van.name}</h5>
        <h5 className='mt-3 mb-2'><span className='fw-bold'>Type:</span> {van.type}</h5>
        <p className='mt-3'><span className='fw-bold'>Description:</span> {van.description}</p>
        <h5 className='mt-3'><span className='fw-bold'>Visibility:</span> Public</h5>

      </section>
    </div>
  )
}

export default HostVanDetailsDescription