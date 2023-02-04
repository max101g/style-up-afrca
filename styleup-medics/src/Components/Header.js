import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'

export default function Header() {
  return (
    <>
    <div className='header'>
            <div className='new-header'>
                <Navbar/>
            </div>
            <div className='log'>
                <Login/>
                <Signup/>
            </div>
    </div>
    </>
  )
}
