var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile('public/index');
});

module.exports = router;
