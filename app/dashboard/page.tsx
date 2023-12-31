import React from 'react'
import Card from '../components/dashboard/Card/Card'
import Transactions from '../components/dashboard/Transactions/Transactions'
import Chart from '../components/dashboard/Chart/Chart'
import Rightbar from '../components/dashboard/Rightbar/Rightbar'

const page = () => {
  return (
    <section className='flex gap-2'>
      <main className='flex-[3]'>
        <div className='flex justify-between gap-[10px] '>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </main>
      <aside className='flex-1 '>
        <Rightbar />
      </aside>
    </section>
  )
}

export default page