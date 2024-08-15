'use client'

import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function RegisterPage() {
    const [username,setUsername] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [passwordconfirm,setPasswordconfirm] = useState("");
    const [error,setError] = useState("");

    console.log(username,email,password,passwordconfirm)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != passwordconfirm){
            setError("Password doesn't match")
            return;
        }

        if(!username || !email || !password || !passwordconfirm){{
            setError("Please fill all the fields");
            return;
        }}

        try{
            const res = await fetch("http://localhost:3000/api/register",{
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,email,password
                })

            })


            if(res.ok){
                const form = e.target;
                setError("");
                form.reset();
            }else{
                console.log("User registration failed.")
            }

        }catch(error){
            console.log("Error during registration: ",error)
        }
    }

  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-5'>
        <h3>Register Page</h3>
        <hr className=' my-3'/>
        <form onSubmit={handleSubmit}>

            {error &&(
                <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'
                >{error}</div>
            )}

            <input onChange={(e) => setUsername(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your username' />
            <input onChange={(e) => setemail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
            <input onChange={(e) => setpassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
            <input onChange={(e) => setPasswordconfirm(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Condirm your password' />
            <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign up</button>
        </form>
        <hr className='my-3'/>
        <p>Do not have an account? <Link href="/login" className='text-blue-500 hover:underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage
