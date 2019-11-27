const nuevoUsuario = () => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (nombre, username, email, edad) VALUES ("mikhael", "ermikha", "mikmik@gmail.com", 15)', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });

}



module.exports = {
    nuevoUsuario: nuevoUsuario
}