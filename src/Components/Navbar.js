import React from 'react'
import  { Link, NavLink } from 'react-router-dom'
import './style.css'
import unit from './asset/images/unit.png'

const Navbar = () => {
  const activeStyle={
  textDecoration:'underline',
    fontWeight:'bold',
    color:'#E17654'
  }
  return (
    <header className=''>
      <div className='row p-3 mt-3'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
      <div className='col-md-9'>
 
 <Link className='text-dark navbar-brand active fw-bold h1' to='/'>#VANTRAVELS</Link></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
   
            <div className='col-md-3'>
            <ul className='navbar-nav'>
            <li className='nav-item'> <NavLink  style={({isActive})=>isActive? activeStyle : null } className='nav-link'
             to='/host'>Host</NavLink></li>
                
            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null}  to='/about'>About</NavLink></li>
            <li className='nav-item'> <NavLink className='nav-link'   style={({isActive})=>isActive? activeStyle : null} to='/vans'>Vans</NavLink></li>
            <li className='nav-item'> <NavLink className='nav-link'   style={({isActive})=>isActive? activeStyle : null} to='/login'>
             <img src={unit} alt='profile' className='img ' width='30' height='30'/>
              
              </NavLink></li>
            </ul>

        </div></div></nav></div></header>
   
  )
}

export default Navbar