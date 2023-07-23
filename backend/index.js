const fs = require('fs')
const YoutubeMp3Downloader = require('youtube-mp3-downloader')
const { Deepgram } = require('@deepgram/sdk')
const ffmpeg = require('ffmpeg-static')
//conect to forntend
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const server = express()

//server.use(cors());
server.use((req, res, next)=>{
    console.log("myRespons" ,res);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next()
})
server.use(express.json());
server.use(bodyParser.json());
server.get('/',(req,res)=>{
    res.json('hello backend this side')
})
server.post('/sendData', (req, res) => {
    console.log(req.body);
    const url = req.body.URL.split('/')
    // console.log(); 
    const urlID = url[url.length-1]
    const deepgram = new Deepgram('354fbf020859834aedffe589b44e0775908c5e5a')
    const YD = new YoutubeMp3Downloader({
        ffmpegPath: ffmpeg,
        outputPath: './',
        youtubeVideoQuality: 'highestaudio',
    })

    YD.download(urlID)

    YD.on('progress', (data) => {
        console.log(data.progress.percentage + '% downloaded')
    }) 

    YD.on('finished', async (err, video) => {
        // console.log(err);
        const videoFileName = video.file
        console.log(`Downloaded ${videoFileName}`)

        const file = {
            buffer: fs.readFileSync(videoFileName),
            mimetype: 'audio/mp3',
        }
        const options = {
            punctuate: true, 
        } 

        const result = await deepgram.transcription
            .preRecorded(file, options)
            .catch((e) => console.log(e))
        console.log(result)

        const transcript = result.results.channels[0].alternatives[0].transcript

        //   fs.writeFileSync(
        //     `${videoFileName}.txt`,
        //     transcript,
        //     () => `Wrote ${videoFileName}.txt`
        //   )

        fs.unlinkSync(videoFileName)
        const obj = { 'transcript': transcript }
        res.json(obj)
    })
})

server.listen(8080, () => {
    console.log('server is started')
})


