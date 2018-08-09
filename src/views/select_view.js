const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (container) {
  this.container = container;
}


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-loaded', (event) => {
    const munros = event.detail;
    this.render(munros);
  });
}

SelectView.prototype.render = function (munros) {
  this.emptyDetails();
  addName(munros.name, this.container);
};

SelectView.prototype.emptyDetails = function () {
  this.container.innerHTML = '';
};

function addName(name, container) {
  const munroName = document.createElement('h2');
  munroName.classList.add('munro-name');
  munroName.textContent = name;
  container.appendChild(munroName);
};



module.exports = SelectView;
