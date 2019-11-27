const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');



// POST http://localhost:3000/api/usuarios
router.post('/', async (req, res) => {
    const result = await Usuario.nuevoUsuario(req.body);
    res.json(result);
});

module.exports = router;
