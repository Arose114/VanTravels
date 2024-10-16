import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const VanItem = ({id, name, description, price, type, url}) => {
  const [searchParams, setSearchParams]=useSearchParams()

  return (
    <div className='container'>
       <Link to={id} state={{search: `?${searchParams.toString()}`, type: searchParams.get('type')}} className='text-decoration-none'>
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