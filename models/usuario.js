const nuevoUsuario = ({ nombre, username, email, edad, password }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (nombre, username, email, edad, password) VALUES (?,?,?,?,?)', [nombre, username, email, edad, password], (err, rows) => {
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

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const loginUsuario = (pUsername) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where username = ?', [pUsername], (err, row) => {
            if (err) return reject(err);
            if (row) {
                resolve(row);
            } else {
                reject('Usuario no registrado');
            }
        });
    });
}

const relatosUsuario = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from relatos where fk_usuario = ?', [pUsuarioId], (err, rows) => {
            if (err) return reject(err);
            if (rows) {
                resolve(rows);
            } else {
                reject('Este usuario no tiene relatos');
            }
        })
    });
}

const updateUsuario = ({ nombre, username, email, edad, password }, pUsuarioId) => {
    // console.log('entra QUERY')
    return new Promise((resolve, reject) => {
        db.query('UPDATE usuarios SET nombre = ?, username = ?, email = ?, edad = ?, password = ? WHERE id = ?', [nombre, username, email, edad, password, pUsuarioId], (err, row) => {
            // console.log(err);
            if (err) return reject(err);
            if (row) {
                // console.log(row);
                resolve(row);
            } else {
                reject('No se puede editar el usuario');
            }
        })
    })
}

const eliminarUsuario = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM usuarios WHERE id = ?', [pUsuarioId], (err, result) => {
            // console.log(result);
            if (err) reject(err);
            resolve(result);
        });
    });
}







module.exports = {
    nuevoUsuario: nuevoUsuario,
    mostrarUsuarioPorId: mostrarUsuarioPorId,
    getByEmail: getByEmail,
    loginUsuario: loginUsuario,
    relatosUsuario: relatosUsuario,
    updateUsuario: updateUsuario,
    eliminarUsuario: eliminarUsuario
}