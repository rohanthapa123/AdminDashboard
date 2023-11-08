"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

type Props = {}

const Navbar = (props: Props) => {
  const path = usePathname();
  return (
    <nav className='flex justify-between items-center p-[20px] bg-slate-800 rounded-lg'>
      <div className=' capitalize font-semibold text-gray-300'>{path.split("/").pop()}</div>
      <div className='flex items-center'>
        <div className='flex items-center p-2 bg-slate-700 rounded-md gap-2'>
          <MdSearch/>
          <input type="text" className=' bg-transparent border-none outline-none focus:outline-none' placeholder='search...' />
        </div>
        <div className='flex gap-2 ms-2'>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar