const nuevoUsuario = ({ nombre, username, email, edad }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (nombre, username, email, edad) VALUES (?,?,?,?)', [nombre, username, email, edad], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });

}



module.exports = {
    nuevoUsuario: nuevoUsuario
}