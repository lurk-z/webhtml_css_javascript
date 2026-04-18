# 🌍 Jadoo - เว็บไซต์ท่องเที่ยว

เว็บไซต์ท่องเที่ยวที่สมบูรณ์พร้อมด้วยการจองเที่ยวบิน, โรงแรม, และบริหารการจอง

## 🎯 ฟีเจอร์หลัก

- ✅ **หน้าแรก (Home)** - ข้อมูลจุดหมายปลายทางยอดนิยม
- ✅ **สมัครสมาชิก (Sign Up)** - สร้างบัญชีผู้ใช้ใหม่
- ✅ **เข้าสู่ระบบ (Login)** - เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน
- ✅ **จุดหมายปลายทาง (Destinations)** - ดูจุดหมายท่องเที่ยวทั่วโลก
- ✅ **โรงแรม (Hotels)** - ค้นหาและดูโรงแรมต่าง ๆ
- ✅ **การจองเที่ยวบิน (Flights)** - จองเที่ยวบินและเก็บข้อมูล
- ✅ **การจองของฉัน (My Bookings)** - ดูและจัดการการจองของคุณ

## 🚀 วิธีการรันเว็บไซต์

### ตัวเลือกที่ 1: ใช้ VS Code Live Server (ง่ายที่สุด)

1. **ติดตั้ง Live Server Extension**
   - เปิด VS Code
   - ไปที่ Extensions (Ctrl + Shift + X)
   - ค้นหา "Live Server"
   - ติดตั้ง extension

2. **รันเว็บไซต์**
   - คลิกขวาที่ไฟล์ `index.html`
   - เลือก "Open with Live Server"
   - เว็บไซต์จะเปิดขึ้นในเบราว์เซอร์โดยอัตโนมัติ

### ตัวเลือกที่ 2: ใช้ Python Simple Server

1. **เปิด Command Prompt/Terminal**
   ```bash
   cd c:\Users\lurkz\Documents\GitHub\webhtml_css_javascript
   ```

2. **รันด้วย Python 3**
   ```bash
   python -m http.server 8000
   ```

3. **เปิดเบราว์เซอร์**
   - ไปที่: `http://localhost:8000`

### ตัวเลือกที่ 3: ใช้ Node.js Http Server

1. **ติดตั้ง http-server (ถ้ายังไม่มี)**
   ```bash
   npm install -g http-server
   ```

2. **รันเซิร์ฟเวอร์**
   ```bash
   cd c:\Users\lurkz\Documents\GitHub\webhtml_css_javascript
   http-server
   ```

3. **เปิดเบราว์เซอร์**
   - ไปที่: `http://localhost:8080`

### ตัวเลือกที่ 4: เปิดไฟล์โดยตรง

- คลิกขวาที่ `index.html`
- เลือก "Open with" → เลือกเบราว์เซอร์ของคุณ

## 📝 วิธีการใช้งาน

### 1. สมัครสมาชิก
- คลิกปุ่ม "สมัครสมาชิก" บนเมนู
- กรอกข้อมูล: ชื่อ, นามสกุล, อีเมล, รหัสผ่าน
- คลิก "สมัครสมาชิก"
- ข้อมูลจะถูกบันทึกใน Browser's Local Storage

### 2. เข้าสู่ระบบ
- คลิกปุ่ม "เข้าสู่ระบบ"
- ใช้อีเมลและรหัสผ่านที่สมัครไว้
- เข้าสู่ระบบสำเร็จ

### 3. จองเที่ยวบิน
- ไปที่หน้า "Flights" หรือคลิก "Find out more" ที่หน้าแรก
- เลือกจุดหมายปลายทาง วันเดินทาง จำนวนผู้เดินทาง
- กรอกข้อมูลส่วนตัว (ชื่อ, อีเมล, เบอร์โทร)
- คลิก "ยืนยันการจอง"
- การจองจะบันทึกและได้รับรหัสการจอง

### 4. ดูการจองของฉัน
- เข้าสู่ระบบเสียก่อน
- คลิก "การจองของฉัน" บนเมนู
- ดูรายละเอียดการจองของคุณ
- สามารถยกเลิกการจองได้ถ้าต้องการ

## 💾 การเก็บข้อมูล

ข้อมูลทั้งหมดจะถูกเก็บใน **Browser's Local Storage**:

- **ข้อมูลผู้ใช้**: `user_[email]`
- **การจองทั้งหมด**: `bookings` (JSON array)
- **ผู้ใช้ล่าสุด**: `lastUser`
- **การค้นหาโรงแรม**: `hotelSearches` (JSON array)

## 🗂️ โครงสร้างไฟล์

```
webhtml_css_javascript/
├── index.html              # หน้าแรก
├── signup.html             # หน้าสมัครสมาชิก
├── login.html              # หน้าเข้าสู่ระบบ
├── destinations.html       # หน้าจุดหมายปลายทาง
├── hotels.html             # หน้าโรงแรม
├── flights.html            # หน้าจองเที่ยวบิน
├── bookings.html           # หน้าการจองของฉัน
├── styles.css              # ไฟล์ CSS สำหรับจัดแต่ง
├── script.js               # ไฟล์ JavaScript สำหรับฟังก์ชัน
└── README.md               # ไฟล์นี้
```

## 🎨 ความสามารถของเว็บไซต์

### Frontend
- ✅ HTML5 Semantic
- ✅ CSS3 Flexbox & Grid
- ✅ Responsive Design (ทำงานได้บน Mobile, Tablet, Desktop)
- ✅ JavaScript ES6+
- ✅ Form Validation
- ✅ Local Storage API

### ฟังก์ชัน JavaScript
- ✅ สมัครสมาชิก (Sign Up)
- ✅ เข้าสู่ระบบ (Login)
- ✅ บันทึกการจอง (Save Booking)
- ✅ ค้นหาโรงแรม (Hotel Search)
- ✅ จัดการการจอง (Manage Bookings)
- ✅ ตรวจสอบอีเมล (Email Validation)
- ✅ แสดงข้อความแจ้งเตือน (Alerts)

## 🔒 ความปลอดภัย (Demo)

⚠️ **หมายเหตุ**: นี่คือเว็บไซต์สาธิต ความปลอดภัยจริงต้องใช้:
- Backend server (Node.js, Python, PHP, etc.)
- Database (MySQL, MongoDB, etc.)
- HTTPS encryption
- Password hashing
- Authentication tokens (JWT)

## 📱 Responsive Design

- ✅ Desktop: 1200px+
- ✅ Tablet: 768px - 1199px
- ✅ Mobile: < 768px

## 🧪 ทดสอบการใช้งาน

### ตัวอย่าง Flow
1. สมัครสมาชิก: ใช้ email `test@example.com` รหัสผ่าน `password123`
2. เข้าสู่ระบบด้วยข้อมูลเดิม
3. ไปที่หน้า Destinations เลือกจุดหมายปลายทาง
4. ไปที่หน้า Flights กรอกฟอร์มการจอง
5. ดูการจองใน "My Bookings"

## ⚙️ Browser Compatibility

- ✅ Chrome/Edge (ล่าสุด)
- ✅ Firefox (ล่าสุด)
- ✅ Safari (ล่าสุด)
- ⚠️ IE11 (ไม่รองรับ feature บางอย่าง)

## 📞 ติดต่อ / Support

หากมีปัญหาหรือข้อเสนอแนะ สามารถติดต่อได้ผ่าน:
- Email: support@jadoo.com
- Chat: ที่หน้าเว็บไซต์

---

**ขอบคุณที่ใช้งาน Jadoo Travel! ยินดีต้อนรับสู่การท่องเที่ยว** ✈️🌍
