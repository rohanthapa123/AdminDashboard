"use client"
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'

type Props = {
    placeholder: string,
    link : string,
}

const Search = ({placeholder, link}: Props) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{
    const params = new URLSearchParams(searchParams);
    if(e.target.value){
      e.target.value.length > 2 && params.set("q",e.target.value);
    }else{
      params.delete('q');
    }
    replace(`${pathname}?${params}`);
  }

  return (
    <div className='flex items-center justify-between text-sm'>
        <div className='flex gap-2 items-center bg-slate-700 py-1 px-2 rounded-md'>
            <MdSearch size={18}/>
            <input onChange={handleSearch} className='bg-transparent outline-none focus:outline-none p-1' type="text" placeholder={placeholder} />
        </div>
        <Link href={link}>
        <button className='bg-purple-600 p-1 rounded-md'>Add New</button>
        </Link>
    </div>
  )
}

export default Search