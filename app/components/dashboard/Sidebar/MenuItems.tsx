"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    list: {
        title: string,
        path: string,
        icon: React.ReactElement
    }
}

const MenuItems = ({list}: Props) => {
    const path = usePathname();
  return (
    <Link href={list.path} className={`flex items-center p-2 my-1 rounded-md hover:bg-slate-700 cursor-pointer ${path === list.path && "bg-slate-700" }`}>
        <span className='pe-2'>{list.icon}</span>
        <span>{list.title}</span>
    </Link>
  )
}

export default MenuItems