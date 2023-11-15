import Pagination from '@/app/components/dashboard/Pagination/Pagination'
import Search from '@/app/components/dashboard/Search/Search'
import { User } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

  const res = await fetch("http://localhost:3000/api/users", { cache: "no-store" })
  const data = await res.json();
  // console.log(data)
  

  const deleteAction = async (formData: FormData) => {
    "use server"
    const {id} = Object.fromEntries(formData);
    // console.log(id)
    const resp = await fetch(`http://localhost:3000/api/users/${id}`, { method: "DELETE" })
    const deletedUser = await resp.json();
    if (deletedUser)
      revalidatePath("/dashboard/users")
  }
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
          {
            data.users.map((user: User) => {
              return <tr key={user.id}>
                <td>
                  <div className='flex item-center gap-2'>
                    <Image className=' object-cover rounded-full' src="/noavatar.jpg" height={"25"} width={"25"} alt='' />
                    {user.name}
                  </div>
                </td>
                <td className=' truncate max-w-[100px] lg:max-w-[200px] '>{user.email}</td>
                <td>{user.createdAt.toString().slice(0, 10)}</td>
                <td>{user.isAdmin === "true" ? "Admin" : " Member"}</td>
                <td>{user.isActive === "true" ? "Active" : "In Active"}</td>
                <td className='flex'>
                  <Link href={`/dashboard/users/${user.id}`}> <button className='bg-green-600 px-2 py-1 rounded-md text-sm '>View</button></Link>


                  <form action={deleteAction}>
                    <input type="hidden" name='id' value={user.id} />
                    <button type='submit' className='ms-1 bg-red-600 px-2 py-1 rounded-md text-sm'>Delete</button>
                  </form>

                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default page