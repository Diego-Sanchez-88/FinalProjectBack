const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const Relato = require('../../models/relato');

router.post('/nuevo', middleware.checkToken, (req, res) => {
    Relato.nuevoRelato(req.body, req.usuarioId)
        .then(result => {
            // res.send(result); --> funciona en POST http://localhost:3000/api/relato/relatoGuardado
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});



module.exports = router;