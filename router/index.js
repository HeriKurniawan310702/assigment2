const router = require('express').Router();
const login = require('../controller')
const dataJSON = require('../controller/data')
const authentication = require('../middleware/auth')

router.post('/login', login.userLogin);
router.get('/data', authentication, dataJSON.getDataJSON);

module.exports = router;