from flask import Blueprint, request, jsonify
from database import db
from models import Booking
from datetime import datetime

booking_bp = Blueprint('booking', __name__)

@booking_bp.route('/book-service', methods=['POST'])
def book_service():
    data = request.json
    booking = Booking(
        customer_id=data['customer_id'],
        worker_id=data['worker_id'],
        service=data['service'],
        status='pending',
        problem_description=data.get('problem_description')
    )
    db.session.add(booking)
    db.session.commit()
    return jsonify({'message': 'Booking created', 'booking_id': booking.id}), 201

@booking_bp.route('/my-bookings/<int:user_id>', methods=['GET'])
def my_bookings(user_id):
    customer_bookings = Booking.query.filter_by(customer_id=user_id).all()
    result = []
    for b in customer_bookings:
        result.append({
            'id': b.id,
            'worker_id': b.worker_id,
            'service': b.service,
            'status': b.status,
            'booking_date': b.booking_date.isoformat()
        })
    return jsonify(bookings=result)

