import React from 'react'

function Home() {
  return (
    <div>
        <div className="card bg-dark text-white">
                <img
                src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                className="card-img" 
                alt="physio logo"
                />
            <div className="card-img-overlay">
                <div className='aside'>
                    <h1 className='aside-text'>SPAM</h1>
                    <h3 className='text'>Styleup Physio And Medics</h3>
                </div>
                <div className='card-content'>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Style-up Physio and Medics is an organization that aims to infuse the principles of modern</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
