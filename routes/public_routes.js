const express = require ('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    res.send('get request')
}).post((req, res)=>{
    res.send('post request')
})

module.exports = router;