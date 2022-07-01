const express = require("express");
const app = express()
const port = 7070


console.log('rodando');


app.get('/', (req, res) => {
    res.render("index")
})

function converterUrlParaNumero(urlString, numero) {
    for (let i = 0; i < urlString.length; i++) {
        if (parseInt(urlString.charAt(i)) != undefined) {
            if(urlString.charAt(i) == "/"){
                break;
            }
            numero = numero + urlString.charAt(i)
        }
        console.log("primeiro numero: "+numero);
        return parseInt(numero);
    }
    return 0;
}

app.use(function (req, res, next) {
    let teste = req.url.slice(5);
    console.log(teste);
    let primeiroNumero = ""
   // let segundoNumero = ""
    primeiroNumero = converterUrlParaNumero(primeiroNumero);
    //segundoNumero = converterUrlParaNumero(segundoNumero)
    if (req.url != "/sub/:x/:y") {
        console.log("Errouuuuu")
        next()
    } else {

        console.log("nao errou");
        next()
    }

}
)



app.get("/sub/:x/:y", (req, res) => {
    var sub = parseInt(req.params.x) - parseInt(req.params.y)
    res.send("O valor da subtração é:" + sub)
})


app.get("/div/:x/:y", (req, res) => {

    if (req.params.y != 0) {
        var div = parseInt(req.params.x) / parseInt(req.params.y)
        res.send("O valor da divisão é:" + div)
    }
    else {
        res.status(400).end()
    }
})
app.get("/som/:x/:y", (req, res) => {
    var som = parseInt(req.params.x) + parseInt(req.params.y)
    res.send("O valor da soma é: " + som)
})

app.listen(port, () => {
    console.log("rodou")
}) 