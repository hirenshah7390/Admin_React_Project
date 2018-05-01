/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('users', {
        user_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        emplID: {
            type: DataTypes.STRING     
        },
        username: {
            type: DataTypes.STRING     
        },
        password: {
            type: DataTypes.STRING
        },
        SSO: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false          
        },
        role: {
            type: DataTypes.INTEGER                    
        },
        datasource_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'datasources',
                key: 'datasource_ID'
            }
        },
        email: {
            type: DataTypes.STRING                      
        },
        first_name: {
            type: DataTypes.STRING                      
        },
        middle_name: {
            type: DataTypes.STRING                       
        },
        last_name: {
            type: DataTypes.STRING                        
        },
        sex: {
            type: DataTypes.STRING                     
        },
        dob: {
            type: DataTypes.DATE            
        },
        title_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'titles',
                key: 'title_ID'
            }
        },
        degree_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'degrees',
                key: 'degree_ID'
            }
        },
        position_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'positions',
                key: 'position_ID'
            }
        },
        department_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'departments',
                key: 'department_ID'
            }
        },
        au_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'AUs',
                key: 'au_ID'
            }
        },
        institution_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000,
            references: {
                model: 'institutions',
                key: 'institution_ID'
            }
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        updtime: {
            type: DataTypes.DATE
        },
        updby: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'users',
        timestamps: false
    });

    User.associate = function (models) {
        //associations can be defined here
        User.belongsTo(models.titles, {
            targetKey: 'title_ID',
            foreignKey: 'title_ID'
        });
        User.hasMany(models.user_functions, {
            targetKey: 'user_ID',
            foreignKey: 'user_ID'
        });
    };
    return User;
};
