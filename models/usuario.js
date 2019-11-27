const getAll = () => {
    // console.log('función getAll');
    // db.query('select * from usuarios', (err, rows) => {
    //     if (err) return console.log(err);
    //     console.log(rows);
    // });
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });

}



module.exports = {
    getAll: getAll
}