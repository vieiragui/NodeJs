const http = require('http'); //carregando o módulo http

let server = http.createServer((req, res) => { //criando servidor. res são todas as chamadas(solicitações) e res são todas as respostas
    console.log('URL: ', req.url);//exibe a url que esta sendo chamada
    console.log('METHOD: ', req.method);//exibe o método que esta sendo chamado

    switch (req.url){
        case '/':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');//espeficia que é um html, é usado setHeader para especificar. 1º Tipo do conteúdo, 2º indicando que é um html
        res.end('<h1>Olá</h1>');//escreve na tela
        break;

        case '/users':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            users:[{
                name: 'Hcode',
                email: 'contato@hcode.com.br',
                id: 1
            }]
        }));
        break;
    }
});

server.listen(3000, '127.0.0.1', ()=>{ //Servidor esta ouvindo na porta 3000
    console.log("Servidor rodando");
});