import { useEffect, useState } from 'react'
import './App.css'
import Video from './Video'
import Transcript from './Transcript'
import Feature from './Feature'
import Step from './Step'

function App() {
  const [url, setUrl] = useState('')
  const [transcript, setTranscript] = useState('')
  const [urlId, setUrlId] = useState('')
  const [status, setStatus] = useState(true)
  const [loading, setLoading] = useState(false)
  const [viewStatus, setViewStatus] = useState('Get a Transcript')
  const [openTran, setOpenTran] = useState(false)
  useEffect(()=>{
    if(transcript){
      localStorage.setItem(urlId, transcript)
      console.log('set transcript in localStorage');
    }
  },[transcript])
  useEffect(()=>{
    if(urlId.length >= 11){
      setOpenTran(true)
    }
  },[urlId])
  useEffect(()=>{
    if(status){
      setViewStatus('Get a Transcript')
    }
    else{
      setViewStatus('Failed to parse URL')
      setLoading(false)
    }
  },[status])
  useEffect(()=>{
    if(loading){
      setViewStatus('Loading....')
    }
    else{
      setViewStatus('Get a Transcript')
    }
  },[loading])
  const handleURL = (e)=>{
    setViewStatus('Get a Transcript')
    setUrl({[e.target.name]:e.target.value}) 
    if(e.target.value.indexOf('/') > 0){
      const id = e.target.value.split('/')
      setUrlId(id[id.length-1])
    }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const keys = Object.keys(localStorage)
    if(keys.includes(urlId)){
      console.log('this id already exist in localStorage');
      setTranscript(localStorage.getItem(urlId))
      return;
    }
    console.log(urlId);
    setLoading(true)
    const respons = await fetch('https://indian-app-guy-assignment-backend.vercel.app/sendData', {
      method:'POST',
      body: JSON.stringify(url),
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    console.log(respons.ok);
    setStatus(respons.ok)
    const data = await respons.json()
       
    setLoading(false)
    console.log(data?.transcript);
    setTranscript(data.transcript)
  }
  return (
    <>
      {openTran?<div className="flex">
        <div><Video id={urlId}/></div><div><Transcript loading={loading} transcript={transcript}/></div>
         
      </div>:null}
      <div className="background">
        <h1 className='status'>{viewStatus}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter YouTube Url </label>
        <input type="text" id='url' name='URL' onChange={handleURL} required/>
        <input className='btn' value={'Go'} type="submit" />
      </form>
      <p className='information'><strong>Information:</strong> The project has three parts in the first part we'll be downloading a youtube video to a local mp3 file . In the second part, we'll take that file and send it to deepgram to get a nice and accurate transcript . The final step is to save this text right here and display on the User Interface. This process may take time depending on the length of the video. If you have already received an extract from a URL and you try again using the same URL, this process will show the result immediately.</p>
      </div>
      <hr />
      <hr />
      <Step/>
      <hr />
      <hr />
      <Feature/>
      <hr />
    </>
  )
}

export default App
