const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({message: "Bem vindo a API calculadora"});
  });
  
  function converterUrlParaNumero(urlString, numero) {
    let num = "";
    if (!urlString) {
      return undefined;
    }
    for (let i = 0; i < urlString.length; i++) {
      if (parseInt(urlString.charAt(i)) != undefined) {
        if (urlString.charAt(i) == "/") {
          break;
        } else {
          num = num + urlString.charAt(i);
        }
      } else {
        console.log("argumento não é inteiro. indefinido.");
      }
    }
    return num;
  }
  
  app.use((req, res, next) => {
    let teste = req.url.slice(5);
    let primeiroNumero = teste;
    primeiroNumero = converterUrlParaNumero(primeiroNumero);
    aux = req.url.slice(5).split("/");
  
    let segundoNumero = "";
    segundoNumero = converterUrlParaNumero(aux[1]);
    if (!primeiroNumero || !segundoNumero) {
      return res.status(400).send("ERRO 400 BAD REQUEST" );
    }
  
    next();
  });
  
  // funções da calculadora
  
  app.get("/sub/:x/:y", (req, res) => {
    var sub = parseInt(req.params.x) - parseInt(req.params.y);
    res.send("O valor da subtração é:" + sub);
  });
  
  app.get("/div/:x/:y", (req, res) => {
  
      if (req.params.y != 0) {
          var div = parseInt(req.params.x) / parseInt(req.params.y)
          res.send("O valor da divisão é:" + div)
      }
      else {
          res.status(400).send("ERROR 400 BAD REQUEST DIVISAO POR ZERO ")
      }
  })
  app.get("/som/:x/:y", (req, res) => {
    var som = parseInt(req.params.x) + parseInt(req.params.y);
    res.send({resultado: "O valor da soma é: " + som});
  });

  module.exports = app