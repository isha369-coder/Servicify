from flask import Blueprint, request, jsonify
from database import db
from models import Review, Booking

review_bp = Blueprint('review', __name__)

@review_bp.route('/submit-review', methods=['POST'])
def submit_review():
    data = request.json
    review = Review(
        booking_id=data['booking_id'],
        rating=data['rating'],  # 1-5
        comment=data.get('comment')
    )
    db.session.add(review)
    db.session.commit()
    return jsonify({'message': 'Review submitted'}), 201

@review_bp.route('/worker-reviews/<int:worker_id>', methods=['GET'])
def worker_reviews(worker_id):
    reviews = db.session.query(Review).join(Booking).filter(Booking.worker_id == worker_id).all()
    result = []
    for r in reviews:
        result.append({
            'id': r.id,
            'rating': r.rating,
            'comment': r.comment
        })
    return jsonify(reviews=result)

