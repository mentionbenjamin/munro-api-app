const Munros = require('./models/munros.js');
const MunroView = require('./views/munro_view.js');
// const MunroDetailView = require('./views/munro_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  
  const munroContainer = document.querySelector('#munro-container');
  const munroView = new MunroView(munroContainer);
  munroView.bindEvents();

  const munros = new Munros();
  munros.getData();

})
