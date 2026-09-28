
const API_BASE = 'http://localhost:5000/api';

// Register new user
async function registerUser(userData) {
  try {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Registered:', data);
      // Store user_id in localStorage/session
      localStorage.setItem('user_id', data.user_id);
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Login
async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Logged in:', data);
      localStorage.setItem('user_id', data.user_id);
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Get all workers
async function getWorkers() {
  try {
    const response = await fetch(`${API_BASE}/workers`);
    const data = await response.json();
    console.log('Workers:', data.workers);
    // Display workers in HTML
    return data.workers;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Get single worker
async function getWorker(workerId) {
  try {
    const response = await fetch(`${API_BASE}/workers/${workerId}`);
    const data = await response.json();
    console.log('Worker:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Book service
async function bookService(bookingData) {
  try {
    const response = await fetch(`${API_BASE}/bookings/book-service`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Booked:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Submit review
async function submitReview(reviewData) {
  try {
    const response = await fetch(`${API_BASE}/reviews/submit-review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData)
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Review submitted');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Post tender
async function postTender(tenderData) {
  try {
    const response = await fetch(`${API_BASE}/tenders/post-tender`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tenderData)
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Tender posted:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage:
// registerUser({name: 'John Doe', email: 'john@example.com', password: 'pass123', role: 'customer', phone: '1234567890'});
// loginUser('john@example.com', 'pass123');
// getWorkers();
