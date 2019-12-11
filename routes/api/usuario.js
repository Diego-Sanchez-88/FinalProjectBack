const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');
const middleware = require('../middleware');


const Usuario = require('../../models/usuario');


router.post('/registro', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const result = await Usuario.nuevoUsuario(req.body);
    res.json(result);
    // --> esto funciona en POST http://localhost:3000/api/usuario/registro  generando una password encriptada
    // Usuario.nuevoUsuario(req.body)
    //     .then(result => {
    //         // res.send(result);
    //         res.json(result);
    //     }).catch(err => {
    //         console.log(err);
    //     });
});



router.post('/login', (req, res) => {
    // console.log(req.body);
    Usuario.loginUsuario(req.body.username)
        .then(row => {
            // console.log(row); 
            if (row.length !== 1) {
                // console.log('login mal');
                res.json({ error: 'login mal' });
            } else {
                console.log(row[0].password, req.body.password);
                const iguales = bcrypt.compareSync(req.body.password, row[0].password);
                if (iguales) {
                    // console.log('exito');
                    res.json({ success: createToken(row[0]) });
                    // FFUUNNCCIIOOOOONAAAAAAAAAAAAAAAAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                } else {
                    // console.log('login incorrecto');
                    res.json({ error: 'login incorrecto' });
                }
            }
        });
});
// esto funciona en POST  http://localhost:3000/api/usuario/login en postman

const createToken = (usuario) => {
    let payload = {
        usuarioId: usuario.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(120, 'minutes').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY);
}

router.get('/relatos', middleware.checkToken, (req, res) => {
    // console.log(req.body);  // --> esto saca el username y el password (sin encriptar ni ná)
    // res.send('funciona?');  --> esto funciona
    // Usuario.relatosUsuario(req.params)
    console.log(req.usuarioId); // --> esto devuelve la id del usuario
    Usuario.relatosUsuario(req.usuarioId)
        .then(rows => {
            res.send(rows)
        }).catch(err => {
            console.log(err);
        });
    // esto funciona en GET  http://localhost:3000/api/usuario/23/relatos
})

router.get('/', middleware.checkToken, (req, res) => {
    // console.log(req.params.usuarioId);
    Usuario.mostrarUsuarioPorId(req.usuarioId)
        .then(row => {
            res.send(row)
        }).catch(err => {
            console.log(err);
        });
});
// esto funciona en GET http://localhost:3000/api/usuario/:id

module.exports = router;


