'use client'

import React from 'react'
import Navbar from '../components/Navbar'

function WelcomePage() {
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3'>Welcome User!</h3>
        <hr className='my-3'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nemo rem molestias temporibus dicta impedit enim eaque beatae atque culpa? A et minus ex repudiandae aperiam magni ab numquam aut?</p>
      </div>
    </div>
  )
}

export default WelcomePage
