# Servicify - Full-Stack Local Service Marketplace

## 🎯 Step-by-Step Guide to Run Full Working Website

### Prerequisites
- Python 3.8+ installed
- VS Code terminal or Command Prompt

### 1. Install Backend Dependencies (1 min)
```
cd /d "c:/Users/isha2/Downloads/servicify-project"
pip install -r backend/requirements.txt
```

### 2. Start Backend Server (runs on http://localhost:5000)
```
cd backend
python app.py
```
**Terminal Output**: `* Running on http://127.0.0.1:5000` (leave running)

**Database**: Auto-creates `backend/database/servicify.db` with tables.

### 3. Connect Frontend to Backend
**Copy JS functions** from `frontend-integration-examples.js` → your `script.js`:
```js
// Add at top of script.js
const API_BASE = 'http://localhost:5000/api';

// Copy ALL functions: registerUser(), loginUser(), getWorkers(), etc.
```

### 4. Serve Frontend (2 options)

**Option A: Live Server (VS Code Extension - Recommended)**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"
3. Opens http://127.0.0.1:5500/index.html ✅

**Option B: Python HTTP Server**
```
# New terminal (keep backend running)
cd /d "c:/Users/isha2/Downloads/servicify-project"
python -m http.server 8000
```
Open browser: **http://localhost:8000/index.html** ✅

### 5. Test Full Flow

**Browser Console (F12)**:
```js
// Test APIs work
getWorkers();  // Should log workers array
registerUser({name: 'Test User', email: 'test@example.com', password: '123'});
loginUser('test@example.com', '123');
```

**Expected Flow**:
1. Open index.html → services/workers list loads via `getWorkers()`
2. Register/Login forms → POST to backend
3. Book service → POST booking
4. View profile → GET worker/<id>
5. Reviews/tenders work similarly

### 6. Test Data Setup (Optional - via curl/Postman)
```
# Worker (first register user role='worker')
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d "{\"name\":\"Bob Plumber\",\"email\":\"bob@plumber.com\",\"password\":\"123\",\"role\":\"worker\",\"phone\":\"555-1234\"}"

# Note: Add Worker profile manually or extend API
```

### 🚀 Full Stack Running
- Backend: localhost:5000 (APIs)
- Frontend: localhost:5500/8000 (HTML/JS calls APIs)
- ✅ Complete marketplace!

**Troubleshooting**:
- Backend not starting? Check Python/pip install.
- CORS errors? Restart backend.
- No workers? Add test data.

Enjoy your Servicify app! 🎉
