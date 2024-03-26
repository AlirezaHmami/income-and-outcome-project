import React, { useContext } from 'react'
import Cart from './Cart'
import { AppContext } from '../Context/AppContext'

function Carts() {
  const {cart} = useContext(AppContext)
  return (
    <div className='bg-gray-100 rounded-lg p-5 mt-5 grid grid-cols-2 gap-4'>
    {
      cart.map(item => <Cart key={item.id} item={item}/>)
    }
    </div>
  )
}

export default Carts