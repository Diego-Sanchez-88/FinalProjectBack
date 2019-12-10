const express = require('express');
const router = express.Router();

const Relato = require('../../models/relato');

router.post('/nuevo', (req, res) => {
    Relato.nuevoRelato(req.body)
        .then(result => {
            // res.send(result); --> funciona en POST http://localhost:3000/api/relato/relatoGuardado
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});



module.exports = router;