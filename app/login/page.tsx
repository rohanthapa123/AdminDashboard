import React from 'react'

type Props = {}

const page = (props: Props) => {
  const handleLogin = async (formData : FormData) => {
    'use server'
      const {username, password} = Object.fromEntries(formData)
      console.log(username, password);
      
  }
  return (
    <div className='bg-slate-900 w-full h-screen flex items-center justify-center'>
      <form action={handleLogin} className='flex flex-col gap-4 bg-slate-800 p-4 rounded-lg text-center text-white '>
          <h1 className='font-bold'>Login</h1>
          <label htmlFor=""></label>
          <input className='inputBox ' placeholder='username' type="text" name='username'/>
          <input className='inputBox ' placeholder='password' type="password" name='password' />
          <button className='p-1 bg-teal-600 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default page