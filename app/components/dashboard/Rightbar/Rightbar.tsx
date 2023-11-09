import Image from 'next/image'
import React from 'react'
import { MdPlayCircle } from 'react-icons/md'

type Props = {}

const Rightbar = (props: Props) => {
  return (
    <div className='fixed gap-[10px] flex flex-col mt-4 me-4'>

    <div className=' bg-gradient-to-tr from-slate-800 to-slate-600 rounded-lg p-4 gap-4 relative'>
      <div className=' opacity-75 object-contain'>
        <Image src={"/flyman.png"} height={"100"} width={"100"} className='absolute bottom-5 right-5' alt='' />
      </div>
      <h3 className='font-semibold'>🚀Availabe Now</h3>
      <h2 className='font-bold '>How to use new version of Admin Panel</h2>
      <p className='font-light text-sm text-gray-300 my-2'>A 4 minute tutorial</p>
      <p className='font-light text-sm z-20 text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates voluptatum quas alias in architecto.</p>
      <button className='flex bg-purple-600 items-center p-1 rounded-md gap-2 text-sm mt-2'><MdPlayCircle/> Watch</button>
    </div>
    <div className=' bg-gradient-to-tr from-slate-800 to-slate-600 rounded-lg p-4 gap-4'>
      <h3 className='font-semibold'>🚀Coming Soon</h3>
      <h2 className='font-bold '>How to do what is not supposed to do!!</h2>
      <p className='font-light text-sm text-gray-300 my-2'>A life ending activity.</p>
      <p className='font-light text-sm text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates voluptatum quas alias in architecto.</p>
      <button className='flex bg-purple-600 items-center p-1 rounded-md gap-2 text-sm mt-2'><MdPlayCircle/> Watch</button>
    </div>
    </div>
  )
}
export default Rightbar