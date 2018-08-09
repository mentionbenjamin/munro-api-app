const Munros = require('./models/munros.js');
const ListView = require('./views/list_view.js');
// const MunroDetailView = require('./views/munro_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const munroContainer = document.querySelector('#munro-container');
  const listView = new ListView(munroContainer);
  listView.bindEvents();



  const munros = new Munros();
  munros.getData();

})
