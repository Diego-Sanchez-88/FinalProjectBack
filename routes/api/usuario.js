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
        });
});
// esto funciona en GET http://localhost:3000/api/usuario/:id

router.post('/login', (req, res) => {
    console.log(req.body);
    Usuario.loginUsuario(req.body.username)
        .then(row => {
            // console.log(row); 
            if (row.length !== 1) {
                // console.log('login mal');
                res.json({ error: 'login mal' });
            } else {
                if (row[0].password === req.body.password) {
                    // console.log('exito');
                    res.json({ success: 'éxito' });
                } else {
                    // console.log('login incorrecto');
                    res.json({ error: 'login incorrecto' });
                }
            }
        });
});
// esto funciona en POST  http://localhost:3000/api/usuario/login en postman

module.exports = router;


