# 🟦 Bhima Koregaon Member Portal

A Professional Membership Management Website built using

- HTML5
- CSS3
- JavaScript (ES6)
- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- GitHub Pages

---

# 🌐 Live Website

https://bhimakoreganv.github.io/bheema-koregaon-id/

---

# 📌 Project Overview

Bhima Koregaon Member Portal is a Digital Membership System.

This project allows members to

✅ Register Online

✅ Upload Photo

✅ Generate Member ID

✅ Verify Membership

✅ View Digital ID Card

✅ Admin Dashboard

✅ Firebase Database

---

# 🚀 Features

✔ Premium Responsive Design

✔ Firebase Integration

✔ Auto Member ID

✔ Photo Upload

✔ Firestore Database

✔ Member Verification

✔ QR Code

✔ Print ID Card

✔ Download PDF

✔ Admin Panel

✔ Mobile Friendly
---

# 📁 Project Structure

```
Bhima-Koregaon-Member-Portal/

│
├── index.html
├── register.html
├── verify.html
├── admin.html
├── idcard.html
│
├── style.css
│
├── firebase.js
├── register.js
├── verify.js
├── admin.js
├── idcard.js
│
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   ├── default-user.png
│   ├── seal.png
│   ├── signature.png
│   └── qr-placeholder.png
│
├── README.md
└── LICENSE
```

---

# 🔥 Firebase Services Used

This project uses the following Firebase services:

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

---

# 📂 Firestore Database Structure

```
members
│
├── autoDocumentId
│     ├── memberId
│     ├── fullName
│     ├── fatherName
│     ├── mobile
│     ├── email
│     ├── aadhaar
│     ├── gender
│     ├── dob
│     ├── district
│     ├── taluk
│     ├── village
│     ├── address
│     ├── pincode
│     ├── occupation
│     ├── membershipType
│     ├── status
│     ├── photoURL
│     ├── emergencyName
│     ├── emergencyMobile
│     ├── relation
│     └── createdAt
```

---

# 🆔 Member ID Format

Every new member automatically receives a unique Member ID.

Examples:

```
BK000001
BK000002
BK000003
BK000004
```

Member IDs are generated sequentially and are never duplicated.
---

# ⚙️ Installation Guide

Follow these steps to run the project locally.

### Step 1

Clone the repository.

```bash
git clone https://github.com/bhimakoreganv/bheema-koregaon-id.git
```

### Step 2

Open the project folder.

```bash
cd bheema-koregaon-id
```

### Step 3

Open the project in Visual Studio Code.

```bash
code .
```

### Step 4

Run using Live Server.

OR

Upload all files to GitHub Pages.

---

# 🔥 Firebase Setup

Create a Firebase Project.

Enable the following services:

✅ Authentication

✅ Firestore Database

✅ Firebase Storage

---

## Authentication

Go to

Authentication

↓

Get Started

↓

Enable

↓

Email / Password

↓

Save

---

## Firestore

Go to

Firestore Database

↓

Create Database

↓

Production Mode

↓

Location

```
asia-south1 (Mumbai)
```

↓

Create

---

## Storage

Go to

Storage

↓

Get Started

↓

Production Mode

↓

Location

```
asia-south1
```

↓

Done

---

# 🔑 Firebase Configuration

Replace the Firebase configuration inside

```
firebase.js
```

with your own Firebase Project configuration.

Example:

```javascript
const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"XXXXXXXX",

appId:"XXXXXXXX"

}
```

---

# 🌍 GitHub Pages Deployment

Push the project to GitHub.

Open

Settings

↓

Pages

↓

Branch

```
main
```

↓

Folder

```
/root
```

↓

Save

After a few minutes your website will be live.

Example:

```
https://bhimakoreganv.github.io/bheema-koregaon-id/
```

---
---

# 👤 Admin Login

Only authorized administrators can access the Admin Dashboard.

Admin Features:

- View All Members
- Search Members
- Edit Member Details
- Delete Members
- Approve Membership
- View Member ID Cards
- Export Member Data
- Print Reports

---

# 📝 Member Registration Process

Step 1

Open

```
register.html
```

↓

Step 2

Fill in all required information.

- Full Name
- Father / Husband Name
- Date of Birth
- Gender
- Mobile Number
- Email
- Address
- District
- Taluk
- Village
- Membership Type

↓

Step 3

Upload Member Photo.

↓

Step 4

Click

```
Register Member
```

↓

Step 5

Data is saved in Firebase Firestore.

↓

Step 6

Photo is uploaded to Firebase Storage.

↓

Step 7

A unique Member ID is generated automatically.

Example:

```
BK000001
```

↓

Registration Completed.

---

# 🔍 Member Verification Process

Open

```
verify.html
```

↓

Enter Member ID.

Example:

```
BK000001
```

↓

Click

```
Verify
```

↓

The system retrieves data from Firebase Firestore.

↓

Displays:

- Member Photo
- Member Name
- Member ID
- Mobile Number
- Address
- Membership Status

↓

Verification Successful.

---

# 🪪 Digital Member ID Card

Every registered member receives a Digital ID Card.

The ID Card includes:

- Organization Logo
- Member Photo
- Member ID
- QR Code
- Full Name
- Mobile Number
- District
- Membership Type
- Status
- President Signature
- Official Seal

The ID Card can be:

- Printed
- Downloaded
- Shared
- Verified Online

---

# 📷 Photo Upload Flow

Register Page

↓

Choose Photo

↓

Firebase Storage

↓

Photo URL Generated

↓

Firestore stores the Photo URL

↓

Verify Page displays Photo

↓

ID Card displays the same Photo

---

# 🔥 Firestore Data Flow

Register Page

↓

Firestore

↓

Verify Page

↓

Admin Dashboard

↓

Digital ID Card

↓

Print / PDF Download

All pages use the same Firestore member record.

---
---

# 🔒 Security

This project uses Firebase Security Rules to protect member data.

## Firestore Rules

```javascript
rules_version = '2';

service cloud.firestore {

match /databases/{database}/documents {

match /members/{document} {

allow read: if true;

allow create: if true;

allow update: if request.auth != null;

allow delete: if request.auth != null;

}

}

}
```

---

# 📂 Firebase Storage Rules

```javascript
rules_version = '2';

service firebase.storage {

match /b/{bucket}/o {

match /memberPhotos/{allPaths=**} {

allow read: if true;

allow write: if true;

}

}

}
```

---

# 🚨 Error Handling

The system handles common errors such as:

- Empty Form Submission
- Invalid Mobile Number
- Invalid Email Address
- Missing Photo
- Duplicate Member ID
- Firebase Connection Failure
- Storage Upload Failure
- Firestore Save Failure

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Android Phones
- iPhone

Supports:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# ⚡ Performance

Features included:

- Lazy Loading Images
- Responsive Layout
- Optimized CSS
- Optimized JavaScript
- Fast Firebase Queries

---

# 🌐 Browser Compatibility

Supported Browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

---

# 📋 Troubleshooting

## Member Not Saving

Check:

- Firebase Configuration
- Firestore Enabled
- Firestore Rules
- Internet Connection

---

## Photo Not Uploading

Check:

- Firebase Storage Enabled
- Storage Rules
- Image Size
- Image Format (JPG / PNG)

---

## Verify Page Not Working

Check:

- Member ID exists
- Firestore Collection Name (`members`)
- Firebase Configuration

---

## Admin Login Not Working

Check:

- Firebase Authentication Enabled
- Admin Account Created
- Correct Email & Password

---

## ID Card Not Showing

Check:

- Member Data exists
- Photo URL saved
- QR Code generated
- `idcard.js` loaded correctly

---

# 💡 Best Practices

- Use strong admin passwords.
- Back up Firestore data regularly.
- Keep Firebase SDK updated.
- Test the application after every major change.
- Use GitHub commits frequently for version control.

---
---

# 🤝 Contribution

Contributions are welcome.

If you would like to improve this project:

1. Fork this repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Create a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

You are free to:

- Use
- Modify
- Improve
- Share

Please keep proper credit to the original project.

---

# 👨‍💻 Developer

Project Name

Bhima Koregaon Member Portal

Developed using

- HTML5
- CSS3
- JavaScript (ES6)
- Firebase
- GitHub Pages

---

# 📞 Contact

Website

https://bhimakoreganv.github.io/bheema-koregaon-id/

GitHub Repository

https://github.com/bhimakoreganv/bheema-koregaon-id

Email

your@email.com

Phone

+91 XXXXXXXXXX

---

# 🛠 Future Updates

Upcoming features:

- Online Membership Renewal
- QR Code Scanner
- Payment Gateway
- SMS Notification
- Email Verification
- Admin Analytics Dashboard
- Member Attendance
- Event Registration
- Certificate Generation
- Membership Expiry Reminder
- Multi-language Support (Kannada & English)
- Dark Mode

---

# 🙏 Acknowledgements

Special thanks to:

- Firebase Team
- GitHub Pages
- Font Awesome
- Google Fonts
- Open Source Community

---

# ⭐ Support

If you find this project useful:

⭐ Star this repository on GitHub.

Share it with your friends and community.

---

# 📌 Version

Current Version

```
Version 2.0
```

Status

```
Development in Progress
```

Last Updated

```
2026
```

---

# ❤️ Bhima Koregaon Member Portal

**Equality • Justice • Freedom**

**Digital Membership Management System**

© 2026 Bhima Koregaon Member Portal

All Rights Reserved.

---
