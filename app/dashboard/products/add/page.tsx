import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='bg-slate-800 p-4 mt-4 rounded-xl flex flex-col gap-4'>
            <form action="submit" className='flex flex-wrap justify-between gap-5'>
                    <input type="text"  className='inputBox w-[45%] ' placeholder='title' name="title" required/>
                    <select name="" id="" className='inputBox w-[45%]' placeholder='Choose a Category'>
                        <option value="general">Choose a Category</option>
                        <option value="electronic">Electronic</option>
                        <option value="grocery">Grocery</option>
                        <option value="kitchen">Kitchen</option>
                    </select>
                    <input type="number" className='inputBox w-[45%]' placeholder='price' name="price" required/>
                    <input type="text" className='inputBox w-[45%]' placeholder='color' name='color' required />
                
                
                    <input type="number" className='inputBox w-[45%]' placeholder='stock' name='stock' required/>
                    <input type="text" className='inputBox w-[45%]' placeholder='size' name='size' required />
                
                <textarea className='inputBox w-full' name="" id="" cols={30} rows={10} placeholder='Description'></textarea>
                <button className='p-4 w-full bg-teal-600 rounded-sm'>Submit</button>

            </form>
        </div>
    )
}

export default page