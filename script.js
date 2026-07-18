function openLetter(number){

const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach((item,index)=>{

if(index + 1 === number){

item.classList.toggle("open");

}else{

item.classList.remove("open");

}

});

}
