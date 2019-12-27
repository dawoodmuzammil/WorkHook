var express = require('express');
var router = express.Router();

const { asyncErrorHandler } = require('../middleware/index');
const { getLogin, postLogin, postRegister } = require('../controllers/index');


/* GET home page. */
router.get('/', asyncErrorHandler(getLogin));

/* POST home page. */
router.post('/login', asyncErrorHandler(postLogin));

/* GET /register */
router.get('/register', (req, res, next) => {
    res.send('GET /register');
});

/* POST /register */
router.post('/register', asyncErrorHandler( postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
    res.send('GET /login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
    res.send('POST /login');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
    res.send('GET /profile');
});

module.exports = router;
