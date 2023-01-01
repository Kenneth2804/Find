
const { Router } = require('express');
const {People, Country} = require ('../db');



const router = Router();

router.post('/', async (req,res) =>{
const {name, surname, age, description, tattoos, height, country, photo} = req.body
try {
    const nuevo = await People.create({
        name, 
        surname,
        age,    
        description, 
        tattoos,
        height,
        photo,
        country: Country.cname    });
    const city = await Country.findAll({
        where:{
            cname: country
        }
    })
 const alla = await  nuevo.addCountry(city);
    console.log(alla)
    
    return res.status(200).send(nuevo)
} catch (error) {
    res.status(400).send(error.message)
}
        })



module.exports = router;