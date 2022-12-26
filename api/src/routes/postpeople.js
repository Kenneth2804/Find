require ('dotenv').config();
const { Router } = require('express');
const {People, Country} = require ('../db');



const router = Router();

router.post('/', async (req,res) =>{

const {name, surname, age, description, photo, tattoos, height, country} = req.body;
try {
    const usuario = await People.create({
        name, 
        surname, 
        age,
        description, 
        photo,
        tattoos,
        height
    })
    const count = await Country.findAll({
        where: {
             cname: country
            }
        })
        usuario.addCountry(count);


    return res.status(200).send(usuario);


} catch (error) {
return res.status(400).json(error.message)
}
})



module.exports = router;