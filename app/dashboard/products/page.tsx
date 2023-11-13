import { DELETE } from '@/app/api/products/[id]/route'
import Pagination from '@/app/components/dashboard/Pagination/Pagination'
import Search from '@/app/components/dashboard/Search/Search'
import { Product } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
  searchParams:{
    q: string | " "
  }
}

const page = async ({searchParams}: Props) => {
  
  // console.log(searchParams)
  const q = searchParams?.q || " ";
  // console.log(q)
  let resp = await fetch(`http://localhost:3000/api/products?q=${q}`,{cache: 'no-store'});
  const data = await resp.json();
  // console.log(data)

  const handleDelete = async (formData: FormData) =>{
    'use server'
    const {id} = Object.fromEntries(formData);
    console.log(id)
    let resp = await fetch(`http://localhost:3000/api/products/${id}`,{method: "DELETE"})
    if(resp)
      revalidatePath("/dashboard/products")
  }

  return (
    <div className='bg-slate-800 mt-4 p-4 rounded-lg'>
      <div >
        <Search placeholder='Search for a product' link='/dashboard/products/add' />
      </div>
      <table className='w-full text-sm  lg:text-base'>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.products?.map((product: Product) => {
              return <tr key={product.id}>
                <td>
                  <div className='flex item-center gap-2'>
                    <Image className=' object-cover rounded-full' src="/noavatar.jpg" height={"25"} width={"25"} alt='' />
                    {product.title}
                  </div>
                </td>
                <td className=' truncate max-w-[40px] '>{product.description}</td>
                <td>$ {product.price}</td>
                <td>{product.createdAt.toString().slice(0, 10)}</td>
                <td>{product.stock}</td>
                <td className='flex'>
                  
                  <Link href={`/dashboard/products/${product.id}`}>
                      <button className='bg-green-600 px-2 py-1 rounded-md text-sm'>View</button>
                  </Link>
                    <form action={handleDelete}>
                      <input type="hidden" name='id' value={product.id} />
                      <button className='ms-1 bg-red-600 px-2 py-1 rounded-md text-sm'>Delete</button>
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