// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ನಿಮ್ಮ Firebase Config ಇಲ್ಲಿ ಹಾಕಿ
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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

    alert("Member Registered Successfully!");
    form.reset();

  } catch (err) {
    alert("Error: " + err.message);
  }
});
