import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
import MenuItems from './MenuItems';
import Image from 'next/image';

const menuItems: menuitem = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className=' sticky  top-[40px]'>
        <div className='flex gap-4 items-center m-2 md:m-1 '>
            <Image className=' rounded-full' src="/noavatar.jpg" width={"50"} height={"50"} alt="" />
            <div className='text-sm flex flex-col'>
                <span>Rohan Thapa</span>
                <span>Admin</span>
            </div>
        </div>
        {
            menuItems.map((item)=>{
                return <ul key={item.title} className='mt-6'>
                    <li className='text-sm text-gray-200 '>{item.title}</li>
                    {
                        item.list.map(list => <MenuItems key={list.title} list={list}/>)
                    }
                </ul>
            })
        }
        <button className='flex items-center gap-2 p-2 hover:bg-slate-700 my-1 w-full rounded-lg'>
            <MdLogout />
            Logout
        </button>
    </aside>
  )
}

export default Sidebar