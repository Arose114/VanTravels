import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='row p-3'>
        <h3 className='text-center mb-4'>Oooppps, the page you were looking for was not found</h3>
       <Link to='.' className='w-50 mx-auto'> <button className='btn btn-dark w-100 mb-4 mx-auto mt-2 p-2'>Return to home</button></Link>
    </div>
  )
}

export default PageNotFound