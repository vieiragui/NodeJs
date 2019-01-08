const http = require('http'); //carregando o módulo http

let server = http.createServer((req, res) => { //criando servidor. res são todas as chamadas(solicitações) e res são todas as respostas
    console.log('URL: ', req.url);//exibe a url que esta sendo chamada
    console.log('METHOD: ', req.method);//exibe o método que esta sendo chamado

    res.end('OK');//informando que funcionou
});

server.listen(3000, '127.0.0.1', ()=>{ //Servidor esta ouvindo na porta 3000
    console.log("Servidor rodando");
});