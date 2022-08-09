const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;


// setando o motor de views
app.set('view engine', 'ejs');

app.use(cors())


// setando local dos arquivos estáticos
app.use(express.static(__dirname + '/public'));


// para processar os dados do formulario de login/registro
app.use(express.json());

// chamando as rotas
app.use('/', require(__dirname + '/routes/router'));



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});