/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ors_functions', {
        ors_function_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ors_function: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '(N'
        },
        ors_function_sort: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        updtime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())'
        },
        updby: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '(suser_sname())'
        }
    }, {
        tableName: 'ors_functions',
        timestamps: false
    });
};
