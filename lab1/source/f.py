from flask import Flask, render_template

from flask import request
app = Flask(__name__)

@app.route("/")
def hello_world():
    try:
        audio = request.args.get('audioFile')
        print(audio)
    except:
        print("no arg vid")
        audio=None
    try:
        vid = request.args.get('videoFile')
        print(vid)
    except:
        vid=None
        print("no arg viaudd")
    
    return render_template("index.html",vid=vid,audio=audio)

app.run()