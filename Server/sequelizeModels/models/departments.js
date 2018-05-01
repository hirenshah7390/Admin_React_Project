/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    department_abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    um_dept: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    dept_descr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    um_csd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    um_csd_descr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    au_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1000))',
      references: {
        model: 'AUs',
        key: 'au_ID'
      }
    },
    department_sort: {
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
    tableName: 'departments',
    timestamps: false
  });
};
