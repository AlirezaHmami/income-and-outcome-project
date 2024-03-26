import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'



function Outcome() {
  const {outcome} = useContext(AppContext)
  return (
    <div className='bg-red-400 pl-5 rounded w-3/12 h-32 flex flex-col justify-center'>
      <h1 className='text-lg font-bold text-red-700 mb-5'>Outcome</h1>
      <h2 className='text-2xl font-bold text-red-800'>- {outcome}$</h2>
    </div>
  )
}

export default Outcome