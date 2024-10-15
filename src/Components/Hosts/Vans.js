import React, { useEffect, useState } from 'react'
import '../../server'
import '../style.css'
import { Link } from 'react-router-dom'

const Vans = () => {
    const[vans, setVans]=useState([])

    useEffect(()=>{
        fetch('/api/host/vans')
        .then(res=> res.json())
        .then(data=>setVans(data.vans))
    },[])
  return (
    <div className=''>
                <h1>Your Listed Vans</h1>

        {
            vans? vans.map((van)=>
               
                  <Link to={`/host/vans/${van.id}`} key={van.id} className='text-decoration-none'>  <div className='card mb-3'>
                                        <div className='row' key={van.id}>
                        <div className='col-md-6'><img src={van.imageUrl} alt={van.name} className='img img-fluid p-5'/>
                        </div>
                    <div className='col-md-5 col-sm-8 top'>
                        <h1 className='text-center'>{van.name}</h1>
                        <p className='text-center'><span className='fw-bold'>${van.price}</span>/day</p>
                    </div></div>
                    </div></Link>
                ): 'data does not exist'
        }

    </div>
  )
}

export default Vans