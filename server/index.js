const express = require('express');
// const http = http.createServer(app);
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const TodosModel = require('../database/index.js');



app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.post('/api/todo', function(request, response) {
  var todo = request.body.currentTodoDescription;
  var todoMongoInstance = new TodosModel({ description: todo });

  todoMongoInstance.save(function(err) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('meow');
      response.sendStatus(201);
    }
  });
});

app.get('/api/todo', function(request, response) {
  TodosModel.find({}, function(err, data) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log(data);
      response.json(data);
      //response.end(JSON.stringify(data))
    }
  })
});

app.delete('/api/todo/:id', function(request, response){
  // console.log(request.params._id)
  TodosModel.remove({ _id: request.params.id }, function (err) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(202);
    }
    // removed!
  });
})