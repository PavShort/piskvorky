let aktHrac = "circle";

const insertHrac = (evt) => {
  evt.target.disabled = true;
  if (aktHrac === "circle") {
    evt.target.classList.add("hra__ctverecek--circle");
    aktHrac === "cross";
    document.getElementById("aktHrac").src = "obrazky/cross.svg";
  } else {
    evt.target.classList.add("hra__ctverecek--cross");
    aktHrac === "circle";
    document.getElementById("aktHrac").src = "obrazky/circle.svg";
  }
};
  
  document.querySelector("button:nth-child(1)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(2)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(3)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(4)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(5)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(6)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(7)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(8)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(9)").addEventListener("click", insertHrac);
  document.querySelector("button:nth-child(10)").addEventListener("click", insertHrac);

/*Bonus - ověření restartu hry uživatelem  */
  
document.querySelector(".tlacitko__restart").addEventListener("click", (evt) => {
  if (!confirm("Opravdu chceš novou hru?")) {evt.preventDefault();}
});
