import React from 'react'
import './Step.css'
const Step = () => {
    return (
        <>
            <h4 className='stepHeader'>How to copy url from YouTube</h4>
            <div className="copyURL">
                <div className="step">
                    <img className='stepImg' src="homepage.png" alt="" />
                    <p className='stepInfo'>First open the video on the You Tube</p>
                </div>
                <div className="step">
                    <img className='stepImg' src="shareBtn.png" alt="" />
                    <p className='stepInfo'>Click on the share button</p>
                </div>
                <div className="step">
                    <img className='stepImg' src="modal.png" alt="" />
                    <p className='stepInfo'>And copy the link from here</p>
                </div>
            </div>
        </>
    )
}

export default Step