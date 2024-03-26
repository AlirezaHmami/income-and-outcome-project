import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

function Account() {
  const {total} = useContext(AppContext)
  return (
    <div className='bg-slate-400 pl-5 rounded w-3/12 h-32 flex flex-col justify-center'>
      <h1 className='text-lg font-bold text-slate-700 mb-5'>Account</h1>
      <h2 className='text-2xl font-bold text-slate-800'> {total}$</h2>
    </div>
  )
}

export default Account