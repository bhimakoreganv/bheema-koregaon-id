import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1h6LJ0utIIxbzzEpcm38y32MZ1lwFCVo",
  authDomain: "bheema-koregaon-id.firebaseapp.com",
  projectId: "bheema-koregaon-id",
  storageBucket: "bheema-koregaon-id.firebasestorage.app",
  messagingSenderId: "472642489350",
  appId: "1:472642489350:web:f95e96b4ad452325b48787",
  measurementId: "G-5K6CSD3R61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "members"), {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      createdAt: serverTimestamp()
    });

    alert("✅ Member Registered Successfully!");

    form.reset();

  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});
