const { Router } = require('express');
const {People, Country} = require ('../db');
const {cities} = require('../controllers/Country');


const router = Router();
router.get('/', async (req,res, next) =>{
let {cname} = req.query
   const todo = await People.findAll({
      where:{
       cname: cities
      }, include: {model: Country}
   
})
return res.status(200).send(todo)
})



module.exports = router;