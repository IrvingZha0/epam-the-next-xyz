var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongoose = require('mongoose');

var Article = mongoose.model('Article');

// note that typically data would NOT be loaded from the filesystem in this manner :)

/*router.get('/articles', function(req, res, next) {

	var fs = require('fs');
	var obj;
	fs.readFile('./data/articles.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  res.json(JSON.parse(data));
	});
});*/
router.get('/articles', function(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  Article.find({}, null, {sort: {date: -1}}, function (err,data) {
    res.json(data);
  });
});

router.post('/articles', function(req, res, next) {
	console.log(JSON.stringify(req.body) + "post article");
	var article = new Article(req.body);
	article.save(function(err, article) {
		 if (err) return console.error(err);
  	 console.log(article);
	});
});


/*router.get('/articles/:id', function(req, res, next) {

	var fs = require('fs');
	var obj;
	fs.readFile('./data/articles.json', 'utf8', function (err, data) {
		if (err) throw err;

		data = _.filter(JSON.parse(data), function(item) {
		    return item.id == req.params.id;
		});

		res.json(data);
	});
});*/
router.get('/articles/:id', function(req, res, next) {

	Article.findById(req.params.id, function(err, article) {
		if (!err) {
			res.json(article);
		} else {
			res.send(404, 'File not Found.');
		}
	});
});

module.exports = router;