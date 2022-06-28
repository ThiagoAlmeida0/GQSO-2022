const express = require ("express");
const app = express()
const port = 7070

console.log('rodando');

app.get("/sub/:x/:y", (req, res) => {
    var sub = parseInt (req.params.x)-parseInt(req.params.y)
    res.send("O valor da subtração é:"+sub)
})


app.get("/div/:x/:y", (req, res) => { 
    var div = parseInt(req.params.x)/parseInt(req.params.y)
    res.send("O valor da divisão é:"+div)
})
app.get ("/som/:x/:y", (req,res) => {
    var som = parseInt(req.params.x)+parseInt(req.params.y)
    res.send ("O valor da soma é:" +som)
})

app.listen(port, ()=>{
    console.log("rodou")
}) 