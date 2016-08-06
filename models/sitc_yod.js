/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitc_yod', {
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    origin_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'attr_country',
        key: 'id'
      }
    },
    dest_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'attr_country',
        key: 'id'
      }
    },
    export_val: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    import_val: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    export_val_growth_pct: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    export_val_growth_pct_5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    export_val_growth_val: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    export_val_growth_val_5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    import_val_growth_pct: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    import_val_growth_pct_5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    import_val_growth_val: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    import_val_growth_val_5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'sitc_yod'
  });
};
