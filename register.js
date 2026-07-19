
    // register.js
    import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
    import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

    const db = window.db;
    const storage = window.storage;

    window.registerMember = async function () {
      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const photo = document.getElementById("photo").files[0];

      if (!name || !mobile || !email || !address || !photo) {
        alert("Please fill all fields.");
        return;
      }

      try {
        const memberId = "BK" + Date.now();
        const photoRef = ref(storage, "members/" + memberId + "_" + photo.name);

        await uploadBytes(photoRef, photo);
        const photoURL = await getDownloadURL(photoRef);

        await addDoc(collection(db, "members"), {
          memberId,
          name,
          mobile,
          email,
          address,
          photoURL,
          createdAt: new Date()
        });

        alert("Registration Successful!\nMember ID: " + memberId);

        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("photo").value = "";
      } catch (e) {
        console.error(e);
        alert("Registration failed.");
      }
    };
