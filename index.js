//const http = require('http'); carregando o módulo http
const express = require('express');//alem de carregar o modulo express tbm carrega o http
const consign = require('consign');

let app = express();//retorna toda a aplicaçao, conjunto de informações que esta funcionando

consign().include('routes').into(app);//vai incluir todos os arquivo da pasta routes dentro de app


app.listen(3000, '127.0.0.1', ()=>{ //Servidor esta ouvindo na porta 3000
    console.log("Servidor rodando");
});