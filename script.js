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
/* ==========================
   SMOOTH ANIMATIONS
========================== */

function fadeInWebsite(){

website.style.opacity = "0";

website.style.transition = "opacity 1.5s ease";

setTimeout(()=>{

website.style.opacity = "1";

},100);

}

/* Update password success */

function checkPassword(){

const password = document
.getElementById("password")
.value
.trim();

if(password === "09092024"){

passwordScreen.style.opacity = "0";

passwordScreen.style.transition = ".8s";

setTimeout(()=>{

passwordScreen.style.display="none";

website.style.display="block";

fadeInWebsite();

showWelcome();

},800);

}

else{

error.innerHTML="Wrong Password 🤍";

error.style.color="#ff8b8b";

}

}


/* ==========================
   WELCOME MESSAGE
========================== */

function showWelcome(){

const welcome=document.createElement("div");

welcome.id="welcomePopup";

welcome.innerHTML=`

<h2>Welcome, My Love 🤍</h2>

<p>

09 September 2024...

The day our story began.

</p>

`;

document.body.appendChild(welcome);

setTimeout(()=>{

welcome.classList.add("show");

},100);

setTimeout(()=>{

welcome.classList.remove("show");

setTimeout(()=>{

welcome.remove();

},800);

},3500);

}
