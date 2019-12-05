const express = require('express');
const router = express.Router();
const usuarioRouter = require('./api/usuario');
const relatoRouter = require('./api/relato');



router.use('/usuario', usuarioRouter);
router.use('/relato', relatoRouter);





module.exports = router;