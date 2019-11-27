var express = require('express');
var router = express.Router();

const Usuario = require('../models/usuario');


router.get('/registro', (req, res) => {
    Usuario.nuevoUsuario(req.body)
        .then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
});


module.exports = router;