import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

function Income() {
  const {income} = useContext(AppContext)
  return (
    <div className='bg-green-400 pl-5 rounded w-3/12 h-32 flex flex-col justify-center'>
      <h1 className='text-lg font-bold text-green-700 mb-5'>Income</h1>
      <h2 className='text-2xl font-bold text-green-800'>+ {income}$</h2>
    </div>
  )
}

export default Income