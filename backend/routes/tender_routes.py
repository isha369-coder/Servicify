from flask import Blueprint, request, jsonify
from database import db
from models import Tender
from datetime import datetime

tender_bp = Blueprint('tender', __name__)

@tender_bp.route('', methods=['GET'])
def get_tenders():
    tenders = Tender.query.all()
    result = []
    for t in tenders:
        result.append({
            'id': t.id,
            'title': t.title,
            'description': t.description,
            'budget': t.budget,
            'deadline': t.deadline.isoformat() if t.deadline else None
        })
    return jsonify(tenders=result)

@tender_bp.route('/post-tender', methods=['POST'])
def post_tender():
    data = request.json
    tender = Tender(
        title=data['title'],
        description=data.get('description'),
        budget=data['budget'],
        deadline=datetime.fromisoformat(data['deadline'])
    )
    db.session.add(tender)
    db.session.commit()
    return jsonify({'message': 'Tender posted', 'tender_id': tender.id}), 201

