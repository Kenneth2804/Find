const { Router } = require('express');
const {Users} = require ('../db');
const {cities} = require('../controllers/Country');

const router = Router();

router.get("/", async (req,res) => {
try {
    let userss = await Users.findAll({
      attributes : ["id", "name", "picture", "email"]

    }); return res.status(200).json(userss);
} catch (error) {
    res.status(404).json(error.message);
}

})


module.exports = router;