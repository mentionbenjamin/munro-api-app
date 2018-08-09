const PubSub = require('../helpers/pub_sub.js');


const MunroDetailView = function (element) {
  this.element = element;
}

MunroDetailView.prototype.bindEvents = function () {
  this.element.addEventListener('submit')
}



module.exports = MunroDetailView;
