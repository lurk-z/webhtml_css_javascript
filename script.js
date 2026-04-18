// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Handle signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Handle booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }

    // Handle hotel search form
    const hotelForm = document.getElementById('hotelForm');
    if (hotelForm) {
        hotelForm.addEventListener('submit', handleHotelSearch);
    }
});

// Signup form handler
function handleSignup(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showAlert('กรุณากรอกข้อมูลทั้งหมด', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('รหัสผ่านไม่ตรงกัน', 'error');
        return;
    }

    if (password.length < 6) {
        showAlert('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showAlert('อีเมลไม่ถูกต้อง', 'error');
        return;
    }

    // Save to localStorage
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        registeredDate: new Date().toLocaleDateString('th-TH')
    };

    localStorage.setItem('user_' + email, JSON.stringify(userData));
    localStorage.setItem('lastUser', email);

    showAlert('สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ ' + firstName, 'success');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Login form handler
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        showAlert('กรุณากรอกอีเมลและรหัสผ่าน', 'error');
        return;
    }

    // Check if user exists
    const userData = localStorage.getItem('user_' + email);
    
    if (!userData) {
        showAlert('อีเมลนี้ไม่มีในระบบ', 'error');
        return;
    }

    // In real application, verify password with backend
    // For demo purposes, we'll just accept the login
    localStorage.setItem('lastUser', email);
    const user = JSON.parse(userData);
    
    showAlert('เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ ' + user.firstName, 'success');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Booking form handler
function handleBooking(e) {
    e.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const travelers = document.getElementById('travelers').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (!destination || !startDate || !endDate || !travelers || !firstName || !lastName || !email || !phone) {
        showAlert('กรุณากรอกข้อมูลทั้งหมด', 'error');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end <= start) {
        showAlert('วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น', 'error');
        return;
    }

    // Save booking
    const booking = {
        destination: destination,
        startDate: startDate,
        endDate: endDate,
        travelers: travelers,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        bookingDate: new Date().toLocaleDateString('th-TH'),
        bookingId: 'BK' + Date.now()
    };

    // Get existing bookings
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    showAlert('การจองสำเร็จ! รหัสการจองของคุณ: ' + booking.bookingId, 'success');
    
    // Reset form
    document.getElementById('bookingForm').reset();
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2500);
}

// Hotel search handler
function handleHotelSearch(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;

    if (!city || !checkIn || !checkOut) {
        showAlert('กรุณากรอกข้อมูลการค้นหา', 'error');
        return;
    }

    // Save search history
    const search = {
        city: city,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        searchDate: new Date().toLocaleDateString('th-TH')
    };

    let searches = JSON.parse(localStorage.getItem('hotelSearches')) || [];
    searches.push(search);
    localStorage.setItem('hotelSearches', JSON.stringify(searches));

    showAlert('ค้นหาโรงแรมใน ' + city + ' สำเร็จแล้ว', 'success');
    
    // In real app, this would redirect to results page
    setTimeout(() => {
        alert('ผลการค้นหาจะแสดง - ในแอปจริงจะแสดงรายชื่อโรงแรม');
    }, 1500);
}

// Utility functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = 'custom-alert ' + type;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    // Animate in
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
}

// Check if user is logged in
function checkLogin() {
    const lastUser = localStorage.getItem('lastUser');
    if (lastUser) {
        const userData = localStorage.getItem('user_' + lastUser);
        if (userData) {
            return JSON.parse(userData);
        }
    }
    return null;
}

// Logout function
function logout() {
    localStorage.removeItem('lastUser');
    showAlert('ออกจากระบบสำเร็จ', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Update navbar based on login status
function updateNavBar() {
    const user = checkLogin();
    const authButtons = document.querySelector('.auth-buttons');
    
    if (user && authButtons) {
        authButtons.innerHTML = `
            <span class="user-greeting">สวัสดี, ${user.firstName}</span>
            <a href="bookings.html" class="btn-login">การจองของฉัน</a>
            <button onclick="logout()" class="btn-login">ออกจากระบบ</button>
        `;
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateNavBar);
