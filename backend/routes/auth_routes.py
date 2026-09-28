from flask import Blueprint, request, jsonify, session
from database import db
from models import User
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data.get('email')).first():
        return jsonify({'error': 'Email already registered'}), 400
    
    user = User(
        name=data['name'],
        email=data['email'],
        password=generate_password_hash(data['password']),  # Hash password
        role=data.get('role', 'customer'),
        phone=data.get('phone'),
        address=data.get('address')
    )
    db.session.add(user)
    db.session.commit()
    
    session['user_id'] = user.id  # Simple session auth
    return jsonify({
        'message': 'User registered successfully',
        'user_id': user.id,
        'role': user.role
    }), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        session['user_id'] = user.id
        return jsonify({
            'message': 'Login successful',
            'user_id': user.id,
            'role': user.role
        })
    return jsonify({'error': 'Invalid credentials'}), 401

