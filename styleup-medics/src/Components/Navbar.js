import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='home'>Home</NavLink>
      <NavLink to='about'>About us</NavLink>
      <NavLink to='products'>Available products</NavLink>
      <NavLink to='services'>Our services</NavLink>
      <NavLink to='contact'>Contanct us</NavLink>
    </div>
  )
}
