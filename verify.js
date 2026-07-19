import { db } from "./firebase.js";

import {
collection,
query,
where,
getDocs

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


window.verifyMember = async function(){

const memberId = document
.getElementById("memberId")
.value
.trim();

if(memberId==""){

alert("Enter Member ID");

return;

}

const q = query(

collection(db,"members"),

where("memberId","==",memberId)

);

const snapshot = await getDocs(q);

if(snapshot.empty){

document.getElementById("result").innerHTML=

`

<h2>

❌ Member Not Found

</h2>

`;

return;

}

snapshot.forEach(doc=>{

const data=doc.data();
  document.getElementById("memberCard").style.display = "flex";

document.getElementById("photo").src =
data.photoURL || "images/default-user.png";

document.getElementById("name").innerHTML =
data.name || "";

document.getElementById("memberid").innerHTML =
data.memberId || "";

document.getElementById("mobile").innerHTML =
data.mobile || "";

document.getElementById("email").innerHTML =
data.email || "";

document.getElementById("district").innerHTML =
data.district || "";

document.getElementById("taluk").innerHTML =
data.taluk || "";

document.getElementById("village").innerHTML =
data.village || "";

document.getElementById("address").innerHTML =
data.address || "";

document.getElementById("date").innerHTML =
data.createdAt
? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
: "N/A";

const qrImage = document.getElementById("qrImage");

qrImage.src =
"https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
encodeURIComponent(data.memberId);

document.getElementById("result").style.display = "none";
  // Loading ಮುಚ್ಚಿ
document.getElementById("result").style.display = "none";

}); // snapshot.forEach ಮುಗಿಯಿತು

}
catch(error){

console.error(error);

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<div class="error-box">

<h2>

❌ Verification Failed

</h2>

<p>

Something went wrong.

Please try again.

</p>

</div>

`;

}

}

// Enter Key Search

document
.getElementById("memberId")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

verifyMember();

}

});

// Auto Focus

window.onload=function(){

document
.getElementById("memberId")
.focus();

};

// Print ID

window.printMember=function(){

window.print();

};

// Download ID

window.downloadMember=function(){

window.print();

};
