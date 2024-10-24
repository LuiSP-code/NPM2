const express= require('express');
const path= require('path');
const pageRutes= require('./roots/paginas');
const app= express(); 
const port=10;

app.use(express.static('public'));
app.use('/',pageRutes);

app.get('/',(req,res)=>{
    res.redirect('/index')
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
