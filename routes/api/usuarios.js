const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

// GET http:///localhost:3000/api/usuarios
router.get('/', async (req, res) => {
    const rows = await Usuario.getAll();
    res.json(rows);
});

module.exports = router;
