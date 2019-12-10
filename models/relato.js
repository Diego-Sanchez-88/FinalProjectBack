const nuevoRelato = ({ titulo, texto, etiquetas }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO relatos (titulo, texto, etiquetas) VALUES (?,?,?)', [titulo, texto, etiquetas], (err, rows) => {
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