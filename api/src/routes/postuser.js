const { Router } = require('express');
const {Users} = require ('../db');
const {cities} = require('../controllers/Country');

const router = Router();
router.post('/', async (req,res) =>{
let {email, name, picture} = req.body;

if (!email) {
    return res.status(200).json("no email")
}

try {
    const user = await Users.findOne({
        where: {email: email}
    })
  if (user === null) {
    const newuser = await Users.create({
        name,
        picture,
        email
    });
    return res.status(200).send(newuser);
  }
  return res.status(200).json("the user already exist");
} catch (error) {
    return res.status(400).json(error.message);
}


})



module.exports = router;