import React, { useEffect, useState } from 'react'
import VanItem from './VanItem';
import '../server'

const Van = () => {
const [vans, setVan]=useState([])


useEffect(()=>{
    fetch('./api/vans')
    .then (res=>res.json())
    .then(data=>setVan(data.vans))
}, []);

  return (
    <div>
        <h1 className='p-3'>Explore our Vans</h1>
        <div className='row'>
               {
       vans && vans.length? vans.map((van)=> <div className='col-md-4' key={van.id}>
               <VanItem id={van.id} name={van.name} url={van.imageUrl} description={van.description} price={van.price} type={van.type}/>    </div>          ): null
        }
        </div>
    </div>
  )
}

export default Van