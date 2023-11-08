import Image from 'next/image'
import React from 'react'


const Transactions = () => {
  return (
    <div className='w-full bg-slate-800 mt-3 p-4 rounded-lg'>
      <h3 className='font-light text-lg text-gray-200'>Latest Transactions</h3>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Status</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='flex items-center gap-2'>
              <Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />
              Rohan Thapa
            </td>
            <td><span className='pending status'>Pending</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />
              Rohan Thapa
            </td>
            <td><span className='done status'>Done</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />
              Rohan Thapa
            </td>
            <td><span className='cancelled status'>Cancelled</span></td>
            <td>11/8/2023</td>
            <td>$4512</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image className='rounded-full object-cover' src={"/noavatar.jpg"} width={"30"} height={"30"} alt='' />
              Rohan Thapa
            </td>
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