from flask import Flask

from utility import *

app = Flask(__name__)

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = "*"
    response.headers['Access-Control-Allow-Headers'] =  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    response.headers['Access-Control-Allow-Methods'] =  "POST, GET, PUT, DELETE, OPTIONS"
    return(response)

@app.route("/", methods=["GET"])
def call_function():
    res = request_return()
    return(res)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)