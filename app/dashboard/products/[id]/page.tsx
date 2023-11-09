import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-full gap-4 mt-4'>
        <div className='flex-1 rounded-md overflow-hidden w-full h-fit pb-2  text-center bg-slate-800'>
            <Image src="/noavatar.jpg" className='mx-auto rounded-md mt-10 mb-2' width={150} height={150} alt=' ' />
            Iphone
        </div>
        <div className=' flex-[3] p-4 bg-slate-800'>
            <form action="" className='flex flex-col gap-2' >
                <label htmlFor="title">title</label>
                <input className='inputBox'  type="text" placeholder='title' name='title' />
                <label htmlFor="price">price</label>
                <input className='inputBox' type="number" placeholder='price' name='email' />
                <label htmlFor="stock">stock</label>
                <input className='inputBox' type="number" placeholder='stock' name='password' />
                <label htmlFor="size">size</label>
                <input className='inputBox' type="text" placeholder='size' name='size' />
                <label htmlFor="color">color</label>
                <input className='inputBox' type="text" placeholder='color' name='color' />
                <label htmlFor="category">Category</label>
                <select name="category" className='inputBox' id="">
                    <option value="kitchen">Kitchen</option>
                    <option value="grocery">Grocery</option>
                </select>
                <label htmlFor="description">Description</label>
                <textarea name="description" className='inputBox' id="" cols={30} rows={10} placeholder='Description'></textarea>
                <button className='w-full bg-teal-600 p-2 rounded-md'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default page