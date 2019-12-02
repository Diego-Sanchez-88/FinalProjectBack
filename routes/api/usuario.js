const express = require('express');
const router = express.Router();

const Usuario = require('../../models/usuario');


router.post('/registro', (req, res) => {
    Usuario.nuevoUsuario(req.body)
        .then(result => {
            // res.send(result);
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});
// esto funciona en POST http://localhost:3000/api/usuario/registro  --> con esto se están insertando en postman, está funcionando en res.send

router.get('/:usuarioId', (req, res) => {
    // console.log(req.params.usuarioId);
    Usuario.mostrarUsuarioPorId(req.params.usuarioId)
        .then(row => {
            res.send(row)
        }).catch(err => {
            console.log(err);
        })
});
// esto funciona en GET http://localhost:3000/api/usuario/:id

module.exports = router;




module.exports = router;