from database import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), default='customer')  # 'customer' or 'worker'
    phone = db.Column(db.String(20))
    address = db.Column(db.Text)

    # Relationships
    workers = db.relationship('Worker', backref='user', uselist=False)
    bookings_customer = db.relationship('Booking', foreign_keys='Booking.customer_id', backref='customer')
    bookings_worker = db.relationship('Booking', foreign_keys='Booking.worker_id', backref='worker')

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Worker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    service_category = db.Column(db.String(50), nullable=False)  # Plumber, Electrician, etc.
    experience = db.Column(db.Integer)  # years
    location = db.Column(db.String(100))
    bio = db.Column(db.Text)
    rating = db.Column(db.Float, default=0.0)

    # Relationships
    reviews = db.relationship('Review', backref='worker')

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker.id'), nullable=False)
    service = db.Column(db.String(100), nullable=False)
    booking_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='pending')  # pending, confirmed, completed
    problem_description = db.Column(db.Text)

    # Relationships
    review = db.relationship('Review', backref='booking', uselist=False)

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.Integer, db.ForeignKey('booking.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  # 1-5
    comment = db.Column(db.Text)

class Tender(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    budget = db.Column(db.Float)
    deadline = db.Column(db.DateTime)
    contractor = db.Column(db.Integer, db.ForeignKey('user.id'))  # Assigned worker

