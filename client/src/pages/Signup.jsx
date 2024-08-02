import { Link } from 'react-router-dom'

import React from 'react'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-semibold my-7'>SignUP</h1>

     <form className='flex flex-col gap-4'> 
      
      <input type="text" placeholder="username" className='border p-3 rounded-lg' id="username" />

      <input type="email" placeholder="email" className='border p-3 rounded-lg' id="email" /> 

      <input type="password" placeholder="password" className='border p-3 rounded-lg' id="password" />

      <button className='bg-orange-600 text-white p-3 rounded-md uppercase hobver:opacity-95 disabled:opacity-75'>SignUp</button> 
     
     </form>

     <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to={"/sign-in"}>

      <span className='text-blue-600'>Sign In</span>

      </Link>
     </div>


    </div>
  )
}
