import Pagination from '@/app/components/dashboard/Pagination/Pagination'
import Search from '@/app/components/dashboard/Search/Search'
import { fetchUsers } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className='bg-slate-800 mt-4 p-4 rounded-lg'>
      <div className=''>
        <Search placeholder='Search for a user...' link='/dashboard/users/add' />
      </div>
      <table className='w-full text-sm  lg:text-base'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='flex item-center gap-2'>
                <Image className=' object-cover rounded-full' src="/noavatar.jpg" height={"25"} width={"25"} alt='' />
                Rohan Thapa
              </div>
            </td>
            <td  className=' truncate max-w-[100px] lg:max-w-[200px] '>thaparohan2019@gmail.com</td>
            <td>2080.07.25</td>
            <td>Admin</td>
            <td>Active</td>
            <td className=''>
                <Link href={"/dashboard/users/a1b2rohan"}> <button className='bg-green-600 px-2 py-1 rounded-md text-sm '>View</button></Link>
                <Link href={"/"}> <button className='ms-1 bg-red-600 px-2 py-1 rounded-md text-sm'>Delete</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default page