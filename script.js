/* ==========================
   PASSWORD SYSTEM
========================== */

const loader = document.getElementById("loader");
const passwordScreen = document.getElementById("password-screen");
const website = document.getElementById("website");
const error = document.getElementById("error");

website.style.display = "none";

/* Loader */

window.onload = function () {

setTimeout(() => {

loader.style.display = "none";

}, 3500);

};


/* Password */

function checkPassword() {

const password = document
.getElementById("password")
.value
.trim();

if(password === "09092024"){

passwordScreen.style.display = "none";

website.style.display = "block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

else{

error.innerHTML = "Wrong Password 🤍";

error.style.color = "#ff8b8b";

error.style.marginTop = "15px";

}

}
