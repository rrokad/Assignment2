var express = require('express');
var router = express();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About', page: 'about_me' });
});

/* GET Products page. */
router.get('/products', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact', page: 'contactus' });
});

module.exports = router;
