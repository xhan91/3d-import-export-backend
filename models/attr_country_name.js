/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attr_country_name', {
    origin_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'attr_country',
        key: 'id'
      }
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plural: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    article: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'attr_country_name'
  });
};
