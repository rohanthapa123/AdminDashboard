import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-full gap-4 mt-4'>
        <div className='flex-1 rounded-md overflow-hidden w-full h-fit pb-2  text-center bg-slate-800'>
            <Image src="/noavatar.jpg" className='mx-auto rounded-md mt-10 mb-2' width={150} height={150} alt=' ' />
            Rohan Thapa
        </div>
        <div className=' flex-[3] p-4 bg-slate-800'>
            <form action="" className='flex flex-col gap-2' >
                <label htmlFor="username">Username</label>
                <input className='inputBox'  type="text" placeholder='username' name='username' />
                <label htmlFor="email">Email</label>
                <input className='inputBox' type="email" placeholder='email' name='email' />
                <label htmlFor="password">Password</label>
                <input className='inputBox' type="password" placeholder='password' name='password' />
                <label htmlFor="phone">Phone</label>
                <input className='inputBox' type="number" placeholder='phone' name='phone' />
                <label htmlFor="address">Address</label>
                <input className='inputBox' type="text" placeholder='address' name='address' />
                <label htmlFor="isAdmin">Is Admin?</label>
                <select name="isAdmin" className='inputBox' id="">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <label htmlFor="isActive">Is Active?</label>
                <select name="isActive" className='inputBox' id="">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <button className='w-full bg-teal-600 p-2 rounded-md'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default page