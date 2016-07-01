//var express = require('express');
var router = express.Router();

// prefix '/' to routes in home.js
router.use('/', require('./home.js'));

// prefix '/about' to routes in about.js
router.use('/about', require('./about.js'));


// ERROR HANDLING

// 404 error
router.use(function (req, res) {
    res.status(404);
    res.send('404');
});

// 500 error
router.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500');
});

module.exports = router;
