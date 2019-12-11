const nuevoRelato = ({ titulo, texto, etiquetas }, pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO relatos (titulo, texto, etiquetas, fk_usuario) VALUES (?,?,?,?)', [titulo, texto, etiquetas, pUsuarioId], (err, rows) => {
            console.log(rows);
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const getAllRelatos = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM relatos', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}


module.exports = {
    nuevoRelato: nuevoRelato,
    getAllRelatos: getAllRelatos
}