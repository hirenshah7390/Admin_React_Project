/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Functions = sequelize.define('List_All_User_functions', {
    user_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
            model: 'users',
            key: 'user_ID'
        }
    },
    functions: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'List_All_User_functions',
      timestamps: false
  });

    Functions.associate = function (models) {
        //associations can be defined here
        Functions.belongsTo(models.users, {
            targetKey: 'user_ID',
            foreignKey: 'user_ID'
        });
    };
    return Functions;
};
