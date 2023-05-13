const express = require('express');

const router = express.Router();

const { getSpaces } = require('../controllers/following.controller');

const authMiddleware = require("../middlewares/auth");


router.get('/', authMiddleware, async (req, res) => {
    try {
        let spaces = await getSpaces();

        res.status(200).send({
            'message': 'Here are all the spaces',
            spaces,
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong')
    }
})


module.exports = router;