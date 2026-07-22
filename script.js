function openLetter(number){

const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach(item=>{
    item.classList.remove("open");
});

const selectedEnvelope = envelopes[number - 1];

selectedEnvelope.classList.add("open");

}
