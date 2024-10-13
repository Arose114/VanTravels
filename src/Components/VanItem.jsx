import React from 'react'
import { Link } from 'react-router-dom'

const VanItem = ({id, name, description, price, type, url}) => {
  return (
    <div className='container'>
       <Link to={`/vans/${id}`}  className='text-decoration-none'>
        <div  className='card'>
            <div className='card-body'>
                <img src={url} alt='name' className='img img-fluid' />
                <div className='row card-title'>
                  <div className='col-md-8 h5'>{name} </div><div className='col-md-4'>${price}/day</div></div>
                <p className={`btn van-type ${type} selected`}>{type}</p>
            </div>
        </div></Link>
    </div>
  )
}

export default VanItem