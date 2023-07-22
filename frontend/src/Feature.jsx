import React from 'react'
import './Feature.css'
const Feature = () => {
  return (
    <div className='features_icons'>
        <div className="card">
        <i className="fa-solid fa-desktop"></i>
        <h2>Reading is Faster</h2>
        <p>Hello welcome to my video <br /> begone!</p>
        </div>
        <div className="card">
        <i className="fa-solid fa-layer-group"></i>
        <h2>Probably Won't Fail</h2>
        <p>Featuring the latest build of an <br />undocumented API.</p>
        </div>
        <div className="card">
        <i className="fa-regular fa-circle-check"></i>
        <h2>Easy to Use</h2>
        <p>Website definitely made with a <br /> bootstrap template.</p>
        </div>
    </div>
  )
}

export default Feature