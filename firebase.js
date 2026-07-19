// ==========================================
// Bhima Koregaon Member Portal
// firebase.js (Version 2)
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyA1h6LJ0utIIxbzzEpcm38y32MZ1lwFCVo",

  authDomain: "bheema-koregaon-id.firebaseapp.com",

  projectId: "bheema-koregaon-id",

  storageBucket: "bheema-koregaon-id.firebasestorage.app",

  messagingSenderId: "472642489350",

  appId: "1:472642489350:web:f95e96b4ad452325b48787"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Firestore

const db = getFirestore(app);

// Storage

const storage = getStorage(app);

// Authentication

const auth = getAuth(app);

// Export

export {

  app,

  db,

  storage,

  auth

};
