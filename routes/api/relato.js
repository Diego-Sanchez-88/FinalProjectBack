const express = require('express');
const router = express.Router();

const Relato = require('../../models/relato');

router.get('/newText', (req, res) => {
    // res.send('relatito posible nuevo?'); --> funciona en GET http://localhost:3000/api/relato/newText
    res.json(req.body);
});

router.post('/relatoGuardado', (req, res) => {
    Relato.nuevoRelato(req.body)
        .then(result => {
            // res.send(result); --> funciona en POST http://localhost:3000/api/relato/relatoGuardado
        }).catch(err => {
            console.log(err);
        });
});



module.exports = router;