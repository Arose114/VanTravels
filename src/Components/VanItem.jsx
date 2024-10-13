import React from 'react'

const VanItem = ({id, name, description, price, type, url}) => {
  return (
    <div className='container'>
        <div  className='card'>
            <div className='card-body'>
                <img src={url} alt='name' className='img img-fluid' />
                <p className='d-flex card-title'>{name} <span className=''>{price}</span></p>
                <p>{type}</p>
            </div>
        </div>
    </div>
  )
}

export default VanItem