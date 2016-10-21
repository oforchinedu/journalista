var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/journalapp', function(err, database) {
  if (err) {
    return console.log(err);
  } else {
    db = database;
  }
});


/* GET home page. */
router.get('/', function(req, res) {
  db.collection('user').find().toArray((err, result) => {
    if (err) {
      return console.log(err);
    }
    // renders index.ejs
    res.render('index', {journal: result})
  })
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/processlogin', function(req, res) {
  db.collection('user').save(req.body, function(err, result) {
    if (err) {
      return console.log(err);
    } else {
      console.log('saved to database')
      res.redirect('/getjournal');
    }
  });
});

router.get('/createjournal', function(req, res) {
  res.render('createjournal')
});

router.post('/savejournal', function(req, res) {
  db.collection('journal').save(req.body, function(err, result) {
    if (err) {
      return console.log(err);
    } else {
      console.log('saved to database')
      res.redirect('/getjournal');
    }
  });
});

router.get('/getjournal', function(req, res, next) {
   db.collection('journal').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('getjournal', {journal: result})
  })
});

module.exports = router;
