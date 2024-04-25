import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let aktHrac = 'circle';
const pole = document.querySelectorAll(".hra__ctverecek");


const insertHrac = async (evt) => {
  evt.target.disabled = true;
  if (aktHrac === 'circle') {
    evt.target.classList.add('hra__ctverecek--circle');
    aktHrac = 'cross';
    document.getElementById('aktivniHrac').src = 'obrazky/cross.svg';
  } else {
    evt.target.classList.add('hra__ctverecek--cross');
    aktHrac = 'circle';
    document.getElementById('aktivniHrac').src = 'obrazky/circle.svg';
  }

  const prepisSymbolu = [...pole].map((button) => {
    if (button.classList.contains('hra__ctverecek--circle')) {
      return 'o';
    } else if (button.classList.contains('hra__ctverecek--cross')) {
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
    }, 150);
  } else { /*připojení AI pro tah*/ 
    if (aktHrac = 'cross') {
    pole.forEach((button) => {
      button.disabled = true;
    });  

    const response = await fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board: prepisSymbolu,
        player: 'x'
      }),
    });

    const data = await response.json();
    const { x, y } = data.position;
    const index = pole[x + y * 10];

    pole.forEach((button) => {
      if (
        button.classList.contains("hra__ctverecek--circle") ||
        button.classList.contains("hra__ctverecek--cross")
      ) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });

    index.click();
    }
  }
};

pole.forEach((button) => {
  button.addEventListener('click', insertHrac);
});


/*Bonus - ověření restartu hry uživatelem  */

document.querySelector('.tlacitko__restart')
  .addEventListener('click', (evt) => {
    if (!confirm('Opravdu chceš novou hru?')) {
      evt.preventDefault();
    }
  });
