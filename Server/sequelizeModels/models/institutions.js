/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institutions', {
    institution_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    institution_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    institution_abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    institution_sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    UMKC: {
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
    tableName: 'institutions',
    timestamps: false
  });
};
