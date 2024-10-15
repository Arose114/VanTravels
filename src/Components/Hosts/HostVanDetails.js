import React, { useEffect, useState } from 'react'
import '../../server'
import '../style.css'
import { useParams, Link, Outlet,NavLink} from 'react-router-dom'

const HostVanDetails = () => {
  const activeStyle={
    textDecoration:'underline',
      fontWeight:'bold',
      color:'#E17654'
    }

  const params=useParams()
  console.log(params)
  const [van, setVan]= useState()

  useEffect(()=>{
    fetch(`/api/host/vans/${params.id}`)
      .then(res=>res.json())
      .then(data=>setVan(data.vans))
    
  }, [params.id])

  return (
    <div className=''>
      <Link to='..' relative='path' className='text-decoration-none text-dark'><h3> ⬅ Back to all views</h3></Link>

      {
        van? 
        <div className='card p-4 mb-4'key={van.id}>
          <div className='row'>
            <div className='col-md-5 col-sm-8'><img src={van.imageUrl} alt={van.name} className='img img-fluid'/></div>
            <div className='col-md-7 mt-5'>
              <div className='cardtitle mt-4'>
              <span className={`btn van-type mt-3 btn-lg ${van.type} selected`}>{van.type}</span>
                <h3>{van.name}</h3>
              <p><span className='fw-bold'>${van.price}</span>/day</p>
              </div>              </div>
          </div>
          <div className='row mt-3'>
        
 
       
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
            <ul className='navbar-nav'>
                {//end will not allow the nested route to be selected once you click on the parent route
                // to=".": this will route to the parent route instead of typing out the whole url as /host/vans/....
                            }
          
            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='.' end>Details</NavLink></li>
                  
            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='pricing'>Pricing</NavLink></li>

            <li className='nav-item'> <NavLink className='nav-link'  style={({isActive})=>isActive? activeStyle : null } to='photos'>Photos</NavLink></li>
            </ul>

        </nav></div>
        {
          //using outlet context to pass data from the HostVanDetails page to the relative routes under it i.e the HostVanDetailsPhotos and co
        }

      <Outlet context={[van]}/>
          
          </div>
          
          :'no data found'
      }
 
      
    </div>
  )
}

export default HostVanDetails