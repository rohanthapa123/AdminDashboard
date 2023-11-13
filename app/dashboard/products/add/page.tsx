import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const handleForm = async (formData: FormData) =>{
        "use server"
        // console.log(formData)
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
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: jsonString
        };
        let resp = await fetch("http://localhost:3000/api/products",option);
        if(resp){
            revalidatePath("/dashboard/products");
            redirect("/dashboard/products")
        }
    }
    return (
        <div className='bg-slate-800 p-4 mt-4 rounded-xl flex flex-col gap-4'>
            <form action={handleForm} className='flex flex-wrap justify-between gap-5'>
                    <input type="text"  className='inputBox w-[45%] ' placeholder='title' name="title" required/>
                    <select name="category" id="" className='inputBox w-[45%]' placeholder='Choose a Category'>
                        <option value="general">Choose a Category</option>
                        <option value="electronic">Electronic</option>
                        <option value="grocery">Grocery</option>
                        <option value="kitchen">Kitchen</option>
                    </select>
                    <input type="number" className='inputBox w-[45%]' placeholder='price' name="price" required/>
                    <input type="text" className='inputBox w-[45%]' placeholder='color' name='color' required />
                
                
                    <input type="number" className='inputBox w-[45%]' placeholder='stock' name='stock' required/>
                    <input type="text" className='inputBox w-[45%]' placeholder='size' name='size' required />
                
                <textarea className='inputBox w-full' name="description" id="" cols={30} rows={10} placeholder='Description'></textarea>
                <button className='p-4 w-full bg-teal-600 rounded-sm'>Submit</button>

            </form>
        </div>
    )
}

export default page