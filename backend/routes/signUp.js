const express = require('express');
const { getSignUp } = require('../controllers/singUpController');
const router = express.Router();

router.route('/register').post(getSignUp);

module.exports=router;