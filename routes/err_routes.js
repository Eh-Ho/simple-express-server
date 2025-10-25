const path = require('path')
const pageNotFound = (req,res,next) =>{
    const filename = '404.html'
    const options ={
        root : path.join(process.cwd(),'web')
    }
    res.status(404).sendFile(filename, options, (err)=>{
        if(err){
            next(err)
        }else{
            console.log(`file ${filename} sent`)
        }
    })
}



module.exports = pageNotFound;