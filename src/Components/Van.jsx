import React, { useEffect, useState } from 'react'
import VanItem from './VanItem';
import '../server'
import { useSearchParams } from 'react-router-dom';

const Van = () => {
const [vans, setVan]=useState([])
const [searchParams, setSearchParams]=useSearchParams()

const typeFilter= searchParams.get('type')

const displayedVan=typeFilter ? vans.filter(van=>van.type === typeFilter) : vans


useEffect(()=>{
    fetch('./api/vans')
    .then (res=>res.json())
    .then(data=>setVan(data.vans))
}, []);

function handleFilterChange(key,value){
  setSearchParams(prevParams=>{
    if(value===null){
      prevParams.delete(key)
    }else{
      prevParams.set(key,value)
    }
    return prevParams
  })
}

  return (
    <div>
        <h1 className='p-3'>Explore our Vans</h1>
        <div className='row p-3'>
          <div className='col-md-1'>
          <button className='btn btn-success ' onClick={()=>handleFilterChange('type','rugged')}>Rugged</button>
          </div>
       <div className='col-md-1'><button className='btn btn-secondary' onClick={()=>handleFilterChange('type','luxury')}>Luxury</button></div>
       <div className='col-md-1'>  <button className='btn btn-warning ' onClick={()=>handleFilterChange('type','simple')}>Simple</button></div>
       {
        typeFilter && 
<div className='col-md-1'> <button className='btn btn-danger ' onClick={()=>handleFilterChange('type','null')}>Clear</button></div>

          
       } 
       </div>
       
        <div className='row'>
               {
       displayedVan.map((van)=> <div className='col-md-4 mb-3' key={van.id}>
               <VanItem id={van.id} name={van.name} url={van.imageUrl} description={van.description} price={van.price} type={van.type}/>    </div>          )
        }
        </div>
    </div>
  )
}

export default Van