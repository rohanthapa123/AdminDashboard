import React from 'react'
import {  MdSupervisedUserCircle } from 'react-icons/md'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='flex items-center w-full bg-slate-800 p-4 rounded-lg gap-2 cursor-pointer mt-4 hover:bg-slate-700'>
        <MdSupervisedUserCircle />
        <div className='flex flex-col  '>
            <span>Total User</span>
            <span className=' text-[24px] font-bold'>12,458</span>
            <span className='text-[14px] font-light'>
                <span className='text-lime-300 font-semibold pe-2'>12%</span>more then previous work
            </span>
        </div>
    </div>
  )
}

export default Card