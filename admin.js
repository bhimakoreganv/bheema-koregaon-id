// ===============================
// admin.js (Part 1)
// Bhima Koregaon Member Portal
// ===============================

import {
  db,
  auth
} from "./firebase.js";

import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// Global Variables
// ===============================

const membersTable = document.getElementById("membersTable");
const searchInput = document.getElementById("searchInput");
const totalMembers = document.getElementById("totalMembers");

let members = [];

// ===============================
// Check Admin Login
// ===============================

onAuthStateChanged(auth, (user) => {

    if (!user) {

        alert("Admin Login Required");

        window.location.href = "login.html";

        return;
    }

    loadMembers();

});

// ===============================
// Load Members
// ===============================

async function loadMembers() {

    try {

        const q = query(
            collection(db, "members"),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        members = [];

        snapshot.forEach((document) => {

            members.push({

                id: document.id,

                ...document.data()

            });

        });

        totalMembers.innerHTML = members.length;

        displayMembers(members);

    } catch (error) {

        console.error(error);

        alert("Unable to load members.");

    }

}

// ===============================
// Display Members
// ===============================

function displayMembers(list) {

    membersTable.innerHTML = "";

    list.forEach((member, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

        <td>${index + 1}</td>

        <td>${member.memberId || ""}</td>

        <td>${member.fullName || ""}</td>

        <td>${member.mobile || ""}</td>

        <td>${member.email || ""}</td>

        <td>${member.status || "Pending"}</td>

        <td>

            <button
            class="approveBtn"
            onclick="approveMember('${member.id}')">

            Approve

            </button>

            <button
            class="deleteBtn"
            onclick="deleteMember('${member.id}')">

            Delete

            </button>

        </td>

        `;

        membersTable.appendChild(row);

    });

}
// =====================================
// admin.js (Part 2)
// Search + Approve + Delete
// =====================================

// ==============================
// Search Members
// ==============================

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = members.filter(member =>

        (member.fullName || "").toLowerCase().includes(value) ||

        (member.memberId || "").toLowerCase().includes(value) ||

        (member.mobile || "").toLowerCase().includes(value) ||

        (member.email || "").toLowerCase().includes(value)

    );

    displayMembers(filtered);

});

// ==============================
// Approve Member
// ==============================

window.approveMember = async function (id) {

    const ok = confirm("Approve this member?");

    if (!ok) return;

    try {

        await updateDoc(doc(db, "members", id), {

            status: "Approved",

            approvedAt: new Date()

        });

        alert("Member Approved Successfully");

        loadMembers();

    } catch (error) {

        console.error(error);

        alert("Approval Failed");

    }

};

// ==============================
// Delete Member
// ==============================

window.deleteMember = async function (id) {

    const ok = confirm("Delete this member permanently?");

    if (!ok) return;

    try {

        await deleteDoc(doc(db, "members", id));

        alert("Member Deleted");

        loadMembers();

    } catch (error) {

        console.error(error);

        alert("Delete Failed");

    }

};

// ==============================
// Refresh Every 30 Seconds
// ==============================

setInterval(() => {

    loadMembers();

}, 30000);
// =======================================
// admin.js (Part 3)
// Logout + Photo Preview + Print + Export
// =======================================

// ----------------------------
// Admin Logout
// ----------------------------

window.adminLogout = async function () {

    const ok = confirm("Are you sure you want to logout?");

    if (!ok) return;

    try {

        await signOut(auth);

        window.location.href = "login.html";

    } catch (error) {

        console.error(error);

        alert("Logout Failed");

    }

};

// ----------------------------
// View Member Photo
// ----------------------------

window.viewPhoto = function (photoUrl) {

    if (!photoUrl) {

        alert("Photo Not Available");

        return;

    }

    window.open(photoUrl, "_blank");

};

// ----------------------------
// View Member Details
// ----------------------------

window.viewMember = function (memberId) {

    window.location.href =
        "idcard.html?id=" + memberId;

};

// ----------------------------
// Print Member List
// ----------------------------

window.printMembers = function () {

    window.print();

};

// ----------------------------
// Export Members CSV
// ----------------------------

window.exportCSV = function () {

    let csv =

    "Member ID,Name,Mobile,Email,Status\n";

    members.forEach(member => {

        csv +=

        `"${member.memberId}",` +

        `"${member.fullName}",` +

        `"${member.mobile}",` +

        `"${member.email}",` +

        `"${member.status}"\n`;

    });

    const blob =

    new Blob([csv], {

        type: "text/csv"

    });

    const url =

    URL.createObjectURL(blob);

    const a =

    document.createElement("a");

    a.href = url;

    a.download =

    "BhimaKoregaonMembers.csv";

    a.click();

    URL.revokeObjectURL(url);

};

// ----------------------------
// Dashboard Counter Animation
// ----------------------------

function animateCounter() {

    let start = 0;

    let end = members.length;

    const counter =

    document.getElementById("totalMembers");

    const timer =

    setInterval(() => {

        start++;

        counter.innerHTML = start;

        if (start >= end) {

            clearInterval(timer);

        }

    }, 30);

}

animateCounter();

// ----------------------------
// Auto Refresh
// ----------------------------

setInterval(() => {

    loadMembers();

}, 60000);

// ----------------------------
// End of File
// ----------------------------

console.log(

"Bhima Koregaon Admin Panel Loaded Successfully"

);
