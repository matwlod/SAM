const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let html = "<body><h1>Hello World Player</h1>"

    if(req.query.videoFile) {
        html += `<video id="videoPlayer" controls><source src=${req.query.videoFile}></video><BR><BR>`
        html += `<button id="videoCancel" onClick="cancelVideo()">cancel video</button><BR><BR>`
    }

    if(req.query.audioFile) {
        html += `<audio id="audioPlayer" controls><source src=${req.query.audioFile}></audio><BR><BR>`
        html += `<button id="audioCancel" onClick="cancelAudio()">cancel audio</button><BR><BR>`
    }

    if(req.query.imgFile) {
        html += `<img id="posterImage" src=${req.query.imgFile}><BR><BR>`
        html += `<button id="imgCancel" onClick="cancelImg()">cancel image</button><BR><BR>`
    
    }


    html += `<script>
        function cancelVideo() {
            document.getElementById("videoPlayer").src="cancel.mp4";
        }
        function cancelImg() {
            document.getElementById("posterImage").src="cancel.jpg";
        }

        function cancelAudio() {
            document.getElementById("audioPlayer").src="cancel.mp3";
        }

    </script>
`
    html +="</body>"
    res.send(html)
})

app.listen(4080)