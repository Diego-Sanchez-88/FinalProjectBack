const nuevoRelato = ({ titulo, texto, genero }, pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO relatos (titulo, texto, genero, fk_usuario) VALUES (?,?,?,?)', [titulo, texto, genero, pUsuarioId], (err, rows) => {
            // console.log(rows);
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const getAllRelatos = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM relatos order by id desc', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const borrarRelato = (pRelatoId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM relatos WHERE id = ?', [pRelatoId], (err, result) => {
            console.log(result);
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getRelatosGenero = (pRelato) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM relatos WHERE genero = ?', [pRelato], (err, result) => {
            console.log(result);
            if (err) reject(err);
            resolve(result);
        })
    })
}


module.exports = {
    nuevoRelato: nuevoRelato,
    getAllRelatos: getAllRelatos,
    borrarRelato: borrarRelato,
    getRelatosGenero: getRelatosGenero
}