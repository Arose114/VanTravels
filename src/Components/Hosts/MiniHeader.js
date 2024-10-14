import React from 'react'
import { Link } from 'react-router-dom'

const MiniHeader = () => {
  return (
    <div>
         <header className=''>
      <div className='row mt-3'>
        
 
       
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
            <ul className='navbar-nav'>
            <Link className='text-dark navbar-brand active fw-bold h1' to='/host'>Dashboard</Link>
            <li className='nav-item'> <Link className='nav-link text-dark' to='/host/income'>Income</Link></li>
                
            <li className='nav-item'> <Link className='nav-link text-dark' to='/host/reviews'>Reviews</Link></li>
            </ul>

        </nav></div></header>
    </div>
  )
}

export default MiniHeader