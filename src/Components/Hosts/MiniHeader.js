import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MiniHeader = () => {
    {//This provided an active class for the link elements but we have to use Navlink otherwise it wont work. 
      //We can either use style like the below or use className same way as style but to avoid conflicting with other style, better wih style
    }
  const activeStyle={
    textDecoration:'underline',
      fontWeight:'bold',
      color:'#E17654'
    }
  return (
    <div className='container'>
         <header className=''>
      <div className='row mt-3'>
        
 
       
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
            <ul className='navbar-nav'>
                {//end will not allow the nested route to be selected once you click on the parent route
            }
            <NavLink className='text-dark navbar-brand active fw-bold h1'  style={({isActive})=>isActive? activeStyle : null } end to='/host'>Dashboard</NavLink>
          
            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='/host/income'>Income</NavLink></li>
                  
            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='/host/vans'>Vans</NavLink></li>

            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='/host/reviews'>Reviews</NavLink></li>
            </ul>

        </nav></div></header>
    </div>
  )
}

export default MiniHeader