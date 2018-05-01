/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positions', {
    position_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    position_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    position_sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    um_working_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    default_role: {
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
    tableName: 'positions',
    timestamps: false
  });
};
