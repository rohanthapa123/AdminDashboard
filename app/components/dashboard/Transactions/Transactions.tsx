import Image from 'next/image'
import React from 'react'

type Props = {}

const Transactions = (props: Props) => {
  return (
    <div className='w-full bg-slate-800 mt-3 p-4 rounded-lg'>
      <h3 className='font-light text-lg text-gray-200'>Latest Transactions</h3>
      <table className='w-full'>
        <thead>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </thead>
        <tbody>
          <tr>
            <td className='flex item gap-2'><Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' /> Rohan Thapa</td>
            <td ><span className='pending status'>Pending</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex item gap-2'><Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />Rohan Thapa</td>
            <td ><span className='done status'>Done</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex item gap-2'><Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />Rohan Thapa</td>
            <td ><span className='cancelled status'>Cancalled</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex item gap-2'><Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />Rohan Thapa</td>
            <td><span className='pending status'>Pending</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions