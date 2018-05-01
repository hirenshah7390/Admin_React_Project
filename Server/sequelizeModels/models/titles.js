/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('titles', {
    title_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    title_sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'titles',
      timestamps: false
  });
};
