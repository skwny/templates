var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile('about');
});

module.exports = router;
