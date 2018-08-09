const Munros = require('./models/munros.js');
const DetailView = require('./views/detail_view.js');
// const MunroDetailView = require('./views/munro_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  //
  const munroContainer = document.querySelector('#munro-container');
  const detailView = new DetailView(munroContainer);
  detailView.bindEvents();



  const munros = new Munros();
  munros.getData();
})
