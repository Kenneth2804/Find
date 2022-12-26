const { Router } = require('express');
const {Country} = require ('../db');
const {cities} = require('../controllers/Country');

const router = Router();
router.get('/', async (req,res, next) =>{

    try {
        cities.forEach(async p => {
            await Country.findOrCreate({
                where: { cname: p}
            })
        });
        const city = await Country.findAll();
        res.send(city);
    } catch (error) {
       next(error);
    }
})



module.exports = router;