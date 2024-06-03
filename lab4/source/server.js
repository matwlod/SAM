const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let html = `
    <!DOCTYPE HTML>
    <html>
    <head>
    <style>
    table, th, td {
        border: 2px solid black;
      }
    </style>
    </head>
    <body>
        <h1>Hello World Player</h1>
    `
    if(req.query.videoFile) {
        html += `<video id="videoPlayer" controls src=${req.query.videoFile}></video><BR><BR>`
        html += `<button id="videoCancel" onClick="cancelVideo()">cancel video</button><BR><BR>`
        html += `<button id="videoAdd" onClick="addVideoToTable()">Add video</button><BR><BR>`;
    }

    if(req.query.audioFile) {
        html += `<audio id="audioPlayer" controls src=${req.query.audioFile}></audio><BR><BR>`
        html += `<button id="audioCancel" onClick="cancelAudio()">cancel audio</button><BR><BR>`
        html += `<button id="audioAdd" onClick="addAudioToTable()">Add audio</button><BR><BR>`;
    }
    

    if(req.query.imgFile) {
        html += `<img id="posterImage" src=${req.query.imgFile}><BR><BR>`
        html += `<button id="imgCancel" onClick="cancelImg()">cancel image</button><BR><BR>`
        html += `<button id="imgAdd" onClick="addImageToTable()">Add image</button><BR><BR>`;
    
    }
    html += `
    <table id='playlist_table'>
        <tr>
            <th>No.</th>
            <th>URL</th>
            <th>Type</th>
            <th>Action</th>
        </tr>
    </table>`

    html += `<script>
    let i=1;
    function addVideoToTable() {
        let src;
        src = document.getElementById('videoPlayer').src;
        
        let table = document.getElementById('playlist_table');
        let row = table.insertRow(-1);

        row.insertCell(0).innerText = i;
        row.insertCell(1).innerText = src;
        row.insertCell(2).innerText = "Video";
        let removeRow = row.insertCell(3);

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeRowButton');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', (event) => {
            let button = event.target;
            let row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
            
            if (table.rows.length == 1)
            	i = table.rows.length;
            for (let id = 1; id < table.rows.length; id++) {
                table.rows[id].cells[0].innerText = id;
                i = id + 1;
            }
        });
        removeRow.appendChild(removeButton);
        i++;
    }
    function addImageToTable() {
        let src;
        src = document.getElementById('posterImage').src;
        
        let table = document.getElementById('playlist_table');
        let row = table.insertRow(-1);

        row.insertCell(0).innerText = i;
        row.insertCell(1).innerText = src;
        row.insertCell(2).innerText = "Image";
        let removeRow = row.insertCell(3);

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeRowButton');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', (event) => {
            let button = event.target;
            let row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
            
            if (table.rows.length == 1)
            	i = table.rows.length;
            for (let id = 1; id < table.rows.length; id++) {
                table.rows[id].cells[0].innerText = id;
                i = id + 1;
            }
        });
        removeRow.appendChild(removeButton);
        i++;
    }
    function addAudioToTable() {
        let src;
        src = document.getElementById('audioPlayer').src;
        
        let table = document.getElementById('playlist_table');
        let row = table.insertRow(-1);

        row.insertCell(0).innerText = i;
        row.insertCell(1).innerText = src;
        row.insertCell(2).innerText = "Audio";
        let removeRow = row.insertCell(3);

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeRowButton');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', (event) => {
            let button = event.target;
            let row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
            
            if (table.rows.length == 1)
            	i = table.rows.length;
            for (let id = 1; id < table.rows.length; id++) {
                table.rows[id].cells[0].innerText = id;
                i = id + 1;
            }
        });
        removeRow.appendChild(removeButton);
        i++;
    }
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