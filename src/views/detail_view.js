const PubSub = require('../helpers/pub_sub.js');




const DetailView = function (container, munro) {
  this.detailContainer = container;
  this.munro = munro;
};


DetailView.prototype.render = function () {
  const munroName = document.createElement('h3');
  const statList = document.createElement('ul');
  const height = document.createElement('li');
  const meaning = document.createElement('li');

  height.textContent = this.munro.height;
  munroName.textContent = this.munro.name;
  meaning.textContent = this.munro.meaning;

  statList.appendChild(height);
  statList.appendChild(meaning);
  this.detailContainer.appendChild(munroName);
  this.detailContainer.appendChild(statList);
};





module.exports = DetailView;
