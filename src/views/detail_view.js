const PubSub = require('../helpers/pub_sub.js');


const DetailView = function (container) {
  this.container = container;
}


DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-loaded', (event) => {
    const munros = event.detail;
    this.render(munros);
  });
}

DetailView.prototype.render = function (munros) {
  this.emptyDetails();
  addName(munros, this.container);
};

DetailView.prototype.emptyDetails = function () {
  this.container.innerHTML = '';
};

function addName(munros, container) {
  munros.forEach((munro)=>{
    const munroName = document.createElement('h2');
    munroName.classList.add('munro-name');
    munroName.textContent = munro.name;
    container.appendChild(munroName);
  })
};



module.exports = DetailView;
