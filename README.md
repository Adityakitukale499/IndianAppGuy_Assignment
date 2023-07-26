# Transcript Generator - YouTube Video to Text
<p>This project is a web application that takes a YouTube video URL as input and converts its audio content into text (transcript) using the Deepgram speech-to-text API. The backend is implemented in Node.js using Express, and the frontend is developed with React.</p>

## Features
* User can input a YouTube video URL.
* The application downloads the audio from the YouTube video and saves it as an MP3 file.
* The MP3 file is sent to the Deepgram API for speech-to-text conversion.
* The generated transcript is displayed on the frontend user interface.
* If the transcript for a video URL has been previously generated, it will be retrieved from the browser's local storage instead of making a new request to the Deepgram API.

## Backend
* The backend is built using Node.js and Express.
* It uses the youtube-mp3-downloader library to download the audio from the provided YouTube URL as an MP3 file.
* The @deepgram/sdk library is used to connect to the Deepgram speech-to-text API and get the transcript.
* The backend is configured to listen on port 8080.

## Frontend
* The frontend is developed with React.
* Users can input the YouTube URL in a text box.
* Upon submission, the frontend sends a request to the backend API to generate the transcript.
* If the transcript for a URL has been previously generated, it will be fetched from the browser's local storage, avoiding redundant API calls.
* The video and transcript are displayed side by side.

## How to Run
* Ensure you have Node.js and npm installed.
* Clone or download the project repository.
* Navigate to the backend folder and run the following commands:
  ```npm install```
  ```npm start```
* Open a new terminal and navigate to the frontend folder, then run
  ```npm install```
  ```npm run dev```

## Important Notes
* To use the Deepgram speech-to-text API, you need an API key. In this project, the API key is hard-coded in the backend (index.js). For security reasons, it's better to use environment variables or a more secure method to handle the API key.
* The project uses fetch to make API requests to the backend. Make sure the backend is running on port 8080 for the frontend to communicate with it successfully.
