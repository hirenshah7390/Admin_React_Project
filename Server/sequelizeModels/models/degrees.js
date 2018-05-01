/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('degrees', {
    degree_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    degree_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    degree_sort: {
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
    tableName: 'degrees',
    timestamps: false
  });
};
