/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attr_sitc', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    sitc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conversion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_old: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'attr_sitc'
  });
};
