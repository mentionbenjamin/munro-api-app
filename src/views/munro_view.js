const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');


const MunroView = function (container) {
  this.container = container;
}

MunroView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-loaded', (event) => {
    this.munros = event.detail;

    // console.log(this.munros);
    this.render(this.munros);
  });
}

MunroView.prototype.render = function (munros) {
  munros.forEach((munro) => {
    const detailView = new DetailView(this.container, munro);
    detailView.render();
  });
};


module.exports = MunroView;
