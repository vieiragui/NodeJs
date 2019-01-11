//const http = require('http'); carregando o módulo http
const express = require('express');//alem de carregar o modulo express tbm carrega o http

let app = express();//retorna toda a aplicaçao, conjunto de informações que esta funcionando

//get é o metodo que esta sendo utilizado. estou criando uma rota que é acessivel pelo metodo get
//primeiro parametro é a rota
app.get('/',(req, res) => { //criando servidor. res são todas as chamadas(solicitações) e res são todas as respostas
    //console.log('URL: ', req.url);//exibe a url que esta sendo chamada
    //console.log('METHOD: ', req.method);//exibe o método que esta sendo chamado
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola</h1>');
});

app.get('/users', (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1
        }]
    });
});


app.listen(3000, '127.0.0.1', ()=>{ //Servidor esta ouvindo na porta 3000
    console.log("Servidor rodando");
});