import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        id: string,
    }
}

const page = async ({params}: Props) => {
    const {id} = params;
    console.log(id)
    const resp = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await resp.json();
    let {title, image ,description, price ,stock, color, size, category} = product.products;
    
    const handleUpdate = async ( formData: FormData) =>{
        'use server'
        const {title, category, price,color, stock, size, description} = Object.fromEntries(formData)
        const dataToAdd = {
            title : title,
            category: category,
            price: Number(price),
            color: color,
            stock: Number(stock),
            size: size,
            description: description,
        }
        console.log(dataToAdd)
        const jsonString = JSON.stringify(dataToAdd);
        const option = {
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: jsonString
        };
        let resp = await fetch(`http://localhost:3000/api/products/${id}`,option);
        if(resp){
            revalidatePath("/dashboard/products");
            redirect("/dashboard/products")
        }
        
    }

  return (
    <div className='flex w-full gap-4 mt-4'>
        <div className='flex-1 rounded-md overflow-hidden w-full h-fit pb-2  text-center bg-slate-800'>
            <Image src={'/noavatar.jpg'} className='mx-auto rounded-md mt-10 mb-2' width={150} height={150} alt=' ' />
            Iphone
        </div>
        <div className=' flex-[3] p-4 bg-slate-800'>
            <form action={handleUpdate} className='flex flex-col gap-2' >
                <label htmlFor="title">title</label>
                <input className='inputBox'  type="text" placeholder='title' name='title' value={title} />
                <label htmlFor="price">price</label>
                <input className='inputBox' type="number" placeholder='price' name='price' value={price} />
                <label htmlFor="stock">stock</label>
                <input className='inputBox' type="number" placeholder='stock' name='stock' value={stock} />
                <label htmlFor="size">size</label>
                <input className='inputBox' type="text" placeholder='size' name='size' value={size} />
                <label htmlFor="color">color</label>
                <input className='inputBox' type="text" placeholder='color' name='color' value={color}/>
                <label htmlFor="category">Category</label>
                <select name="category" className='inputBox' id="" value={category}>
                    <option value="kitchen">Kitchen</option>
                    <option value="grocery">Grocery</option>
                </select>
                <label htmlFor="description">Description</label>
                <textarea name="description" value={description} className='inputBox' id="" cols={30} rows={10} placeholder='Description'></textarea>
                <button className='w-full bg-teal-600 p-2 rounded-md'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default page