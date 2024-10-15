import React from 'react'
import './style.css'

const About = () => {
  return (
    <div className=''>
      <div className='about-section img img-fluid'></div>
      <section>
              <h3 className=''>Don't squeeze in a sedan when you could relax in a van.</h3>
      <p className=''>Our mission is to enliven your road trip with the perfect travel van rental. Our van are recertified before each trip to ensure your travel plans can go on without a hitch.<br/>
      <span className=''>[Hitch cost extra 😊]</span></p>
      <p className=''>Our team is full of vantravels enthusiasts who knows firsthand the magic of touring on 4 wheels.</p>
      </section>

<div className='row bg-about'>
  <h4 className='mt-2'>Your destinatination is waiting. <br/>Your van is ready.</h4>
  <button className='btn btn-lg btn-light mb-4 mt-2 mx-3 w-50'>Explore our Van</button>
</div>
    </div>
  )
}

export default About