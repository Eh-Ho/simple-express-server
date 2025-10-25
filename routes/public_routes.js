const express = require ('express');
const path = require('path')


const publicRouter = express.Router();
publicRouter.route('/').get((req, res, next)=>{
    const filename = 'index.html'
    const options ={
        root : path.join(process.cwd(),'web')
    }
    res.status(200).sendFile(filename, options, (err)=>{
        if(err){
            next(err)
        }else{
            console.log(`file ${filename} sent`)
        }
    })
}).post((req, res, next)=>{
    res.send('post request')
})

module.exports = publicRouter;