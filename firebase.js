
    // firebase.js
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
    import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

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

    export const db = getFirestore(app);
    export const storage = getStorage(app);
