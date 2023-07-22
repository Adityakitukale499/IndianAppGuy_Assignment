import React from 'react'
import Loader from './Loader'
import './Transcript.css'
const Transcript = ({ loading, transcript }) => {
    return (
        <div className='transcript'>
            <h1>Transcript</h1>
            <div className="transcriptContent">
                {loading ? <Loader /> : transcript}
            </div>
        </div>
    )
}

export default Transcript