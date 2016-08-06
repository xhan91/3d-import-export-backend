/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attr_sitc_name', {
    sitc_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'attr_sitc',
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
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
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
    timestamps: false,
    tableName: 'attr_sitc_name'
  });
};
