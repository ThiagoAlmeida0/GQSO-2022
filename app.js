const express = require ("express");
const app = express()
const port = 7070

console.log('rodando');

app.get("/div/:x/:y", (req, res) => { 
    var div = parseInt(req.params.x)/parseInt(req.params.y)
    res.send("O valor da divisão é:"+div)
})

app.listen(port, ()=>{
    console.log("rodou")
}) 