'use client'

import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function LoginPage() {
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-5'>
        <h3>Login Page</h3>
        <hr className=' my-3'/>
        <form action="">
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your username' />
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
            <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign in</button>
        </form>
        <hr className='my-3'/>
        <p>Already have an account? <Link href="/register" className='text-blue-500 hover:underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
