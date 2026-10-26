from flask import Flask, jsonify, request
from datetime import datetime, timezone
app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "API Is Running"
    })

@app.route("/status")
def status():
    return jsonify({
        "status": "Ok",
        "version": "0.0.1"
    })
    
@app.route("/time")
def current_time():
    now = datetime.now(timezone.utc).isoformat()
    return jsonify({
        "current time": now
    })
    
@app.route("/info")
def info():
    return jsonify({
        "app": "Flask Practice",
        "Author": "David Snir",
        "day": 2
    })
    
@app.route("/echo", methods=["POST"])
def echo():
    body = request.json
    
    if not bool(body):
        return jsonify({
            "success": False,
            "Error": "JSON Was Empty"
        }), 400
    
    return jsonify({
        "success": True,
        "echo": body
    })
    
USERS = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"},
        {"id": 4, "name": "Alice Smith"},\
]
@app.route("/search")
def search():
    name = request.args.get("name")
    if not name:
        return jsonify({
            "success": False,
            "error": "name required"
        }), 400
    results = []
    for u in USERS:
        if name in u["name"]:
            results.append(u)
        
    return jsonify ({
        "success": True,
        "results": results
    })
    
    
if __name__ == "__main__":
    app.run(debug=True)