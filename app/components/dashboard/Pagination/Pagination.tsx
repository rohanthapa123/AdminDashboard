import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className='flex justify-between text-black mt-4'>
        <button disabled className='p-1 bg-white rounded-md text-sm disabled:cursor-not-allowed'>Previous</button>
        <button className='p-1 bg-white rounded-md text-sm disabled:cursor-not-allowed'>Next</button>

    </div>
  )
}

export default Pagination