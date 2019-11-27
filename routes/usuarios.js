var express = require('express');
var router = express.Router();

const Usuario = require('../models/usuario');

router.get('/', (req, res) => {
    // res.send('que bonito')
    Usuario.getAll()
        .then(rows => {
            res.send(rows);
        }).catch(err => {
            console.log(err);
        });
});


module.exports = router;