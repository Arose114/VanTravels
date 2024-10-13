import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'


const VanDetails = () => {
    const params=useParams()
    console.log(params)
    const[van, setVan]=useState(null)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))


    }, [params.id])
    
  return (
    <div className='container'>
        {van?
           <div className='container p-2'>
            <div  className='card'>
                <div className='card-body'>
                    <img src={van.imageUrl} alt={van.name} className='img img-fluid' />
                    <span className={`btn van-type mt-3 btn-lg ${van.type} selected`}>{van.type}</span>
                    <div className='row card-title p-3'>
                    <h2 className='mt-4 mb-3fw-bold'>{van.name}</h2>
                    <p className='mt-4'><span className='fw-bold h3'>${van.price}</span>/day</p>
                     <p className='mt-3'>{van.description}</p>
                     <button className='btn link-button'>Rent this Van</button>
                </div>
            </div></div></div> :<p className='p-2'>Loading...please wait</p>
        }
        
    </div>
  )
}

export default VanDetails