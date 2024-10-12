import React from 'react'
import  { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    <header className=''>
      <div className='row p-3 mt-3'>
        <div className='col-md-9'>
 
            <Link className='text-dark navbar-brand active fw-bold h1' to='/'>#VANTRAVELS</Link></div>
            <div className='col-md-3'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
            <ul className='navbar-nav'>
                
            <li className='nav-item'> <Link className='nav-link text-dark' to='/about'>About</Link></li>
            <li className='nav-item'> <Link className='nav-link text-dark' to='/vans'>Vans</Link></li>
            </ul>

        </nav></div></div></header>
   
  )
}

export default Navbar