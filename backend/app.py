import os
from flask import Flask, jsonify, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# create flask app
app = Flask(__name__)

@app.route('/')
def index():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(root_dir, 'index.html')

# Serve static files
@app.route('/style.css')
def styles():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(root_dir, 'style.css')

@app.route('/script.js')
def scripts():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(root_dir, 'script.js')

@app.route('/icons/<path:filename>')
def icons(filename):
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(os.path.join(root_dir, 'icons'), filename)

CORS(app)

# get backend directory
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# create database folder if it does not exist
db_folder = os.path.join(BASE_DIR, "database")

if not os.path.exists(db_folder):
    os.makedirs(db_folder)

# database file path
db_path = os.path.join(db_folder, "servicify.db")

# configure sqlite database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + db_path
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# initialize database
db = SQLAlchemy(app)


# Example Worker Table
class Worker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    service = db.Column(db.String(100))
    location = db.Column(db.String(100))
    experience = db.Column(db.Integer)
    rating = db.Column(db.Float)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))


# create tables
with app.app_context():
    db.create_all()


# test route
@app.route("/")
def home():
    return "Servicify Backend Running"


# example workers api
@app.route("/api/workers")
def get_workers():

    workers = Worker.query.all()

    worker_list = []

    for w in workers:
        worker_list.append({
            "id": w.id,
            "name": w.name,
            "service": w.service,
            "location": w.location,
            "experience": w.experience,
            "rating": w.rating
        })

    return jsonify(worker_list)

@app.route("/api/auth/register", methods=["POST"])
def register():

    data = request.get_json()

    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "Email already exists"}), 400

    user = User(
        name=data["name"],
        email=data["email"],
        password=data["password"]
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Registered successfully"}), 201

@app.route("/api/auth/login", methods=["POST"])
def login():

    data = request.get_json()

    user = User.query.filter_by(
        email=data["email"],
        password=data["password"]
    ).first()

    if user:
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "name": user.name
            }
        })

    return jsonify({"error": "Invalid credentials"}), 401


# run server
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

    # PWA Routes
@app.route('/sw.js')
def service_worker():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(root_dir, 'sw.js')

@app.route('/manifest.json')
def manifest():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(root_dir, 'manifest.json')