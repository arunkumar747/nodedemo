var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arun' });
  cricket=[
    {name:'dhoni',no:'7',pos:'keepar'},
    {name:'dhoni',no:'7',pos:'keepar'},
    {name:'dhoni',no:'7',pos:'keepar'},
    {name:'dhoni',no:'7',pos:'keepar'}
  ]
});

module.exports = router;
