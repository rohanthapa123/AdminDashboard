import React from 'react'
import Navbar from '../components/dashboard/Navbar/Navbar'
import Sidebar from '../components/dashboard/Sidebar/Sidebar'

 const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex bg-slate-900 text-white'>
        <div className='flex-2  lg:flex-1 bg-slate-800 p-4'>
        <Sidebar />
        </div>
        <div className=' flex-[4] p-4'>
        <Navbar />
        {children}
        </div>
    </div>
  )
}

export default RootLayout
