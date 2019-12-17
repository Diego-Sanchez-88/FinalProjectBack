const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    // res.send('caminando por el campo');  --> esto funciona en POST  http://localhost:3000/api/usuario/login
    if (!req.headers['user-token']) {
        return res.json({ error: 'Tienes que incluir la cabecera user-token' });
    }

    const token = req.headers['user-token'];
    let payload = null;
    try {
        payload = jwt.decode(token, process.env.TOKEN_KEY)
    } catch (err) {
        return res.json({ error: 'El token es inválido' });
    }

    if (moment().unix() > payload.expiresAt) {
        return res.json({ error: 'El token está caducado' });
    }

    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken: checkToken
}