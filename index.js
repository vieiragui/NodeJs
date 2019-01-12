//const http = require('http'); carregando o módulo http
const express = require('express');//alem de carregar o modulo express tbm carrega o http
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();//retorna toda a aplicaçao, conjunto de informações que esta funcionando

app.use(routesIndex);
app.use('/users', routesUsers);


app.listen(3000, '127.0.0.1', ()=>{ //Servidor esta ouvindo na porta 3000
    console.log("Servidor rodando");
});