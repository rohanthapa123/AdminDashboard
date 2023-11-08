"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data: dataItem[] = [
  {
    name: 'Sun',
    visit: 4000,
    sell: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    visit: 3000,
    sell: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    visit: 2000,
    sell: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    visit: 2780,
    sell: 3908,
    amt: 2000,
  },
  {
    name: 'thu',
    visit: 1890,
    sell: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    visit: 2390,
    sell: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    visit: 3490,
    sell: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className='bg-slate-800 mt-[10px] rounded-lg h-[350px] text-sm w-full'>
      <h3 className='p-4 font-light text-gray-300'>Weekly Recap</h3>
      <ResponsiveContainer width="100%" height="80%" >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#151c2c", border: "none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart