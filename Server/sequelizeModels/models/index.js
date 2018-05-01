'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*
db.user = require('./user')(sequelize, Sequelize);
db.titles = require('./titles')(sequelize, Sequelize);
db.userFunctions = require('./List_All_User_functions')(sequelize, Sequelize); */

//Relations
//db.user.belongsTo(db.titles, {targetKey: 'title_ID', foreignKey: 'title_ID'});
//db.userFunctions.belongsTo(db.user);

module.exports = db;
