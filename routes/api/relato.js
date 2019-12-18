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

router.post('/borrar', (req, res) => {
    // console.log(req.body); // devuelve en terminal [Object: null prototype] { id: '2' }
    Relato.borrarRelato(req.body.id)
        .then(result => {
            // res.json(result); // en POST http://localhost:3000/api/relato/borrar funciona para el id que se ponga.
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});

router.post('/genero', (req, res) => {
    // console.log(req.body); // devuelve [Object: null prototype] {titulo: 'jolin', texto: 'algo hay que cambiar el', 'genero\n': 'jiuo'}
    Relato.getRelatosGenero(req.body.genero)
        .then(result => {
            // res.send(result); // en POST http://localhost:3000/api/relato/genero funciona para el genero que se ponga.
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});



module.exports = router;