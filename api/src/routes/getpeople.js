const { Router } = require('express');
const {People, Country} = require ('../db');
const {cities} = require('../controllers/Country');


const router = Router();
router.get('/', async (req,res, next) =>{

   const todo = await People.findAll({
   
})
return res.status(200).send(todo)
})



module.exports = router;