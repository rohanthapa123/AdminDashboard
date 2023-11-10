import Pagination from '@/app/components/dashboard/Pagination/Pagination'
import Search from '@/app/components/dashboard/Search/Search'
import { fetchProducts } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page =  async (props: Props) => {
  const products = await fetchProducts();
  console.log(products)
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
          <tr>
            <td>
              <div className='flex item-center gap-2'>
                <Image className=' object-cover rounded-full' src="/noavatar.jpg" height={"25"} width={"25"} alt='' />
                Rice
              </div>
            </td>
            <td className=' truncate max-w-[40px] '>Its tasty as hell . so what  hus do you think of it asdlkjaslkfj salfj aslkjfasl fjls</td>
            <td>$21</td>
            <td>2080.07.25</td>
            <td>70</td>
            <td className=''>
                <Link href={"/dashboard/products/a1b3rohanpro"}> <button className='bg-green-600 px-2 py-1 rounded-md text-sm'>View</button></Link>
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