var express = require('express');
var router = express.Router();

var angry_birds = require('../modules/angry_birds');


router.get('/', function(request, response) {
  var mustacheVariables = {
    angrybirdsList: angry_birds.birds
  }
  response.render('./index', mustacheVariables);
})


router.get('/:id', function(request, response) {
  var getangrybirds =request.params.id;
  var getangrylist = angry_birds.birds[getangrybirds];
  var mustacheVariables={
    angrybirdsList:getangrylist
  }
  response.render('./show',mustacheVariables)
})

module.exports = router; 