/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attr_country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    id_2char: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_3char: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    feenstra_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comtrade_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_old: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    borders_land: {
      type: DataTypes.STRING,
      allowNull: true
    },
    borders_maritime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image_author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    palette: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'attr_country'
  });
};
