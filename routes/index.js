let express = require('express');
let routes = express.Router(); //método

routes.get('/',(req, res) => { //criando servidor. res são todas as chamadas(solicitações) e res são todas as respostas
    //console.log('URL: ', req.url);//exibe a url que esta sendo chamada
    //console.log('METHOD: ', req.method);//exibe o método que esta sendo chamado
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola</h1>');
});

module.exports = routes; //Como a index que irá chamar esse arquivo não tem o Router, é necessário esportá-lo, para que outro arquivo possa exxergar
//Todo arquivo que requirir esse arquivo, o routes será transportado para ele