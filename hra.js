import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let aktHrac = "circle";
const pole = document.querySelectorAll("button");

const insertHrac = (evt) => {
  evt.target.disabled = true;
  if (aktHrac === "circle") {
    evt.target.classList.add("hra__ctverecek--circle");
    aktHrac = "cross";
    document.getElementById("aktivniHrac").src = "obrazky/cross.svg";
  } else {
    evt.target.classList.add("hra__ctverecek--cross");
    aktHrac = "circle";
    document.getElementById("aktivniHrac").src = "obrazky/circle.svg";
  };

   const prepisSymbolu = [...pole].map((button) => {
    if (button.classList.contains("hra__ctverecek--circle")) {
      return 'o';
      } else if (button.classList.contains("hra__ctverecek--cross")) {
      return 'x';
      } else {
      return '_';
      }
    });
  
    const vitez = findWinner(prepisSymbolu);
    if (vitez === 'o' || vitez === 'x') {
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${vitez} !`);
        location.reload();
      }, 150);
    } else if (vitez === 'tie') {
      setTimeout(() => {
        alert(`Hra skončila remízou!`);
        location.reload();
      }, 150)
    };
   }; 
  
    pole.forEach ((button) => {
      button.addEventListener("click", insertHrac)
    });    


/*Bonus - ověření restartu hry uživatelem  */
  
document.querySelector(".tlacitko__restart").addEventListener("click", (evt) => {
  if (!confirm("Opravdu chceš novou hru?")) {evt.preventDefault();}
});
