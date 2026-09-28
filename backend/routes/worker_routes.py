from flask import Blueprint, jsonify
from database import db
from models import Worker, User

worker_bp = Blueprint('worker', __name__)

@worker_bp.route('', methods=['GET'])
def get_workers():
    workers = db.session.query(Worker, User).join(User).all()
    result = []
    for worker, user in workers:
        result.append({
            'id': worker.id,
            'name': user.name,
            'service_category': worker.service_category,
            'experience': worker.experience,
            'location': worker.location,
            'bio': worker.bio,
            'rating': worker.rating,
            'phone': user.phone
        })
    return jsonify(workers=result)

@worker_bp.route('/<int:worker_id>', methods=['GET'])
def get_worker(worker_id):
    worker = db.session.query(Worker, User).join(User).filter(Worker.id == worker_id).first()
    if not worker:
        return jsonify({'error': 'Worker not found'}), 404
    worker_data, user_data = worker
    return jsonify({
        'id': worker_data.id,
        'name': user_data.name,
        'service_category': worker_data.service_category,
        'experience': worker_data.experience,
        'location': worker_data.location,
        'bio': worker_data.bio,
        'rating': worker_data.rating,
        'phone': user_data.phone,
        'address': user_data.address
    })

