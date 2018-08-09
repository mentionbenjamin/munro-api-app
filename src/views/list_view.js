const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');


const ListView = function (container) {
  this.container = container;
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-loaded', (event) => {
    this.munros = event.detail;

    // console.log(this.munros);
    this.render(this.munros);
  });
}

ListView.prototype.render = function (munros) {
  munros.forEach((munro) => {
    const detailView = new DetailView(this.container, munro);
    detailView.render();
  });
};


module.exports = ListView;
