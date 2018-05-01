let sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    user: 'test',
    password: 'hiren',
    server: 'localhost',
    database: 'ORS'
}

var connection = sql.connect(sqlConfig, function (err) {
    if (err)
        throw err; 
});


module.exports = sql; 
