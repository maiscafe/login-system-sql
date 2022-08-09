const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../config/db');

//router para as views
router.post('/register', (req, res) => {

    // const { login, senha } = req.body;

    const login = "teste";
    const senha = "123";

    db.query('INSERT INTO tb_users (login, senha) VALUES (?, ?);', [login, senha], (err, results) => {
        if(err) {
            console.log(err);
            return res.status(400).json({status: 'error', message: 'Erro ao cadastrar usuário'});
        }
        return res.status(200).json({status: 'success', message: 'Usuário cadastrado com sucesso: ' + results});
    });
});

router.post('/login', (req, res) => {
    const { login, senha } = req.body;

    db.query('SELECT * FROM tb_users where login = ?;', [login], (err, results) => {
        if(err) {
            console.log(err);
            return res.status(400).json({status: 'error', message: 'Erro ao realizar login'});
        }
        if(results.length === 0 ) {
            return res.status(400).json({status: 'error', message: 'Usuário não encontrado'});
        }else {
            if(results[0].senha === senha) {
                return res.status(200).json({status: 'success', message: 'Login realizado com sucesso'});
            }else {
                return res.status(400).json({status: 'error', message: 'Senha incorreta'});
            }
        }
    });

});



//tipos get

router.get('/contato', (req, res) => {
    return res.status(200).render('contato');

});


module.exports = router;