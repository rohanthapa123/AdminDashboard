import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const submitAction =async (formData:FormData) => {
        "use server"
        const {name, username, password, email, isAdmin, isActive, phone, address} = Object.fromEntries(formData);
        const dataToAdd = {
            name : name,
            username: username,
            password: password,
            email: email,
            isAdmin: isAdmin,
            isActive: isActive,
            phone: phone,
            address: address,
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
        const resp = await fetch("http://localhost:3000/api/signup",option);
        if(resp){
            revalidatePath("/dashboard/users")
            redirect("/dashboard/users")
        }
    }
    return (
        <div className='bg-slate-800 p-4 mt-4 rounded-xl flex flex-col gap-4'>
            <form action={submitAction} className='flex flex-wrap justify-between gap-5'>
                    <input type="text"  className='inputBox w-[45%] ' placeholder='name' name="name" required/>
                    <input type="text"  className='inputBox w-[45%] ' placeholder='username' name="username" required/>
                    <input type="email" className='inputBox w-[45%]' placeholder='email' name="email" required/>
                    <input type="password" className='inputBox w-[45%]' placeholder='password' name='password' required />
                
                
                    <input type="number" className='inputBox w-[45%]' placeholder='phone' name="phone" />
                    <select name="isAdmin" id="" className='inputBox w-[45%]'  >
                        <option value='false'>Is Admin?</option>
                        <option value="true">Yes</option>
                        <option value="false">NO</option>
                    </select>
                    <select name="isActive" id="" className='inputBox w-[45%]'>
                        <option value="true">Is Active?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                
                <textarea className='inputBox w-full' name="address" id="" cols={30} rows={10} placeholder='Address'></textarea>
                <button className='p-4 w-full bg-teal-600 rounded-sm'>Submit</button>

            </form>
        </div>
    )
}

export default page