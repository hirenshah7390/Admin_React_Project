/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const userFunction = sequelize.define('user_functions', {
        user_function_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,           
            references: {
                model: 'users',
                key: 'user_ID'
            }
        },
        ors_function_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,            
            references: {
                model: 'ors_functions',
                key: 'ors_function_ID'
            }
        },
        deptid_ID: {
            type: DataTypes.INTEGER,                      
            references: {
                model: 'deptids',
                key: 'deptid_ID'
            }
        },
        department_ID: {
            type: DataTypes.INTEGER,                       
            references: {
                model: 'departments',
                key: 'department_ID'
            }
        },
        au_ID: {
            type: DataTypes.INTEGER,                   
            references: {
                model: 'AUs',
                key: 'au_ID'
            }
        },
        division_ID: {
            type: DataTypes.INTEGER,                   
            references: {
                model: 'divisions',
                key: 'division_ID'
            }
        },
        updtime: {
            type: DataTypes.DATE            
        },
        updby: {
            type: DataTypes.STRING           
        }
    }, {
        tableName: 'user_functions',
        timestamps: false
    });

    userFunction.associate = function (models) {
        //associations can be defined here
        userFunction.belongsTo(models.ors_functions, {
            targetKey: 'ors_function_ID',
            foreignKey: 'ors_function_ID'
        });
    };
    return userFunction;
};
