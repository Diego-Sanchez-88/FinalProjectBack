const express = require('express');
const router = express.Router();

const Relato = require('../models/relato');

router.get('/', async (req, res) => {
    // res.send('se ven todos los relatos'); --> funciona en http://localhost:3000/relatos
    const rows = await Relato.getAllRelatos();
    res.json(rows);
});


module.exports = router;