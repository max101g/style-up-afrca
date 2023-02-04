import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'

export default function Header() {
  return (
    <>
    <div className='header'>
                <header>
                    <img
                     className='spm-log'
                     src='https://pngimg.com/d/stethoscope_PNG52.png'
                     alt='SPM logo'
                     style={{height: '7rem'}}
                     />
                    <h1>Style-up Physio & Medics</h1>
                </header>
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
