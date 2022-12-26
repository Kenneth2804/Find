const {Router} = require ('express');

const getuser = require ('./getuser');
const citiess = require('./getcities');
const postuser = require('./postuser');
const getusers = require('./getusersid');
const postpeople = require('./postpeople');
const getpeople = require('./getpeople');

const router = Router();

router.use("/getuser", getuser);
router.use("/getcities", citiess);
router.use("/postuser", postuser);
router.use("/getusers", getusers);
router.use("/people", postpeople);
router.use("/getpeople", getpeople);

module.exports = router;