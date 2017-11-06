var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TodoRPT02', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Todos = mongoose.model('Todos', { description: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

module.exports = Todos;