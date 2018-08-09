const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
}

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data.message;
      PubSub.publish('Munros:data-loaded', this.data);
    })
    .catch((error) => {
      console.error(error);
    })
};




module.exports = Munros;
