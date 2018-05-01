/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AUs', {
    au_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    au_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    au_abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    au_sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
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
    vcvp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    vcvp_descr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    division_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1000))',
      references: {
        model: 'divisions',
        key: 'division_ID'
      }
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
    tableName: 'AUs',
    timestamps: false
  });
};
