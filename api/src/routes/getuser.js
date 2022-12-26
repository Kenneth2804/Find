const {Router} = require('express');
const {Users} = require('../db');
const router = Router();

router.get('/', async (req,res)=>{
    let {email} = req.query;

    try {
        const user = await Users.findOne({
            where: {email: email}

        }); return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(error);
    }
    

})
module.exports = router;