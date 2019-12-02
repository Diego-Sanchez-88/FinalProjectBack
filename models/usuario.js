const nuevoUsuario = ({ nombre, username, email, edad }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (nombre, username, email, edad) VALUES (?,?,?,?)', [nombre, username, email, edad], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

const mostrarUsuarioPorId = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id = ?', [pUsuarioId], (err, rows) => {
            if (err) reject(err);
            if (rows.length == 1) {
                resolve(rows[0]);
            } else {
                reject('Usuario no registrado');
            }
        });
    })
}



module.exports = {
    nuevoUsuario: nuevoUsuario,
    mostrarUsuarioPorId: mostrarUsuarioPorId
}