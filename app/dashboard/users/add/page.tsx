import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='bg-slate-800 p-4 mt-4 rounded-xl flex flex-col gap-4'>
            <form action="submit" className='flex flex-wrap justify-between gap-5'>
                    <input type="text"  className='inputBox w-[45%] ' placeholder='username' name="username" required/>
                    <input type="email" className='inputBox w-[45%]' placeholder='email' name="email" required/>
                    <input type="password" className='inputBox w-[45%]' placeholder='password' name='password' required />
                
                
                    <input type="number" className='inputBox w-[45%]' placeholder='phone' name="phone" />
                    <select name="" id="" className='inputBox w-[45%]'  >
                        <option value='false'>Is Admin?</option>
                        <option value="true">Yes</option>
                        <option value="false">NO</option>
                    </select>
                    <select name="" id="" className='inputBox w-[45%]'>
                        <option value="true">Is Active?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                
                <textarea className='inputBox w-full' name="" id="" cols={30} rows={10} placeholder='Address'></textarea>
                <button className='p-4 w-full bg-teal-600 rounded-sm'>Submit</button>

            </form>
        </div>
    )
}

export default page