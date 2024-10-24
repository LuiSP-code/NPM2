const express= require('express');
const path= require('path');
const router = express.Router();

router.get('/page1',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../public','/index.html'))
    console.log("Pagina_1 esta trabajando")
});
router.get('/page2',(req, res,next) =>{
    res.sendFile(path.join(__dirname,"../public","/pagina2.html"));
    console.log("Pagina 2 esta trabajando");
});
router.get('/page3',(req, res,next) =>{
    res.sendFile(path.join(__dirname,"../public","/pagina3.html"));
    console.log("Pagina 3 esta trabajando");
});

module.exports=router;