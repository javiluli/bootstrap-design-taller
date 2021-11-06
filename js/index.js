import { paragraphs, words } from "./const.js";

const title = () => {
  const rng = Math.floor(Math.random() * words.length);
  const text = words[rng];
  return `<h5 class="card-title text-white">${text}</h5>`;
};

const carText = () => {
  let text = "";
  const len = Math.floor(Math.random() * 2 + 1);

  for (let i = 0; i < len; i++) {
    const rng = Math.floor(Math.random() * paragraphs.length);
    text += paragraphs[rng];
  }
  return `<p class="card-text">${text}</p>`;
};

const card = () => {
  return `
  <div class="cardmb-3 my-3 col-xl-4 col-md-6 col-sm-12">
    <div class="card-header bg-primary">
      ${title()}
    </div>
    <div class="card-body">
      ${carText()}

      <p class="card-text mb-0"><b>Fecha de la jornada</b>: 01/01/2000</p>
      <p class="card-text mb-0"><b>Duración</b>: 00:00-00:00 h.</p>
      <p class="card-text mb-0"><b>Ponente</b>: Lorem ipsum</p>
    </div>
  </div>
  `;
};

(function () {
  const masonry = document.getElementById("masonry");
  for (let i = 0; i < 25; i++) {
    masonry.innerHTML += card();
  }
})();
