'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('global_trading', 'xhan91', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var SitcYod = sequelize.import('./models/sitc_yod.js');

function findTrades(origin_id, format, res) {
  var result = [];

  var query = {
    import: { origin_id: origin_id, import_val: { $ne: null } },
    export: { origin_id: origin_id, export_val: { $ne: null } }
  }

  SitcYod.findAll({
    where: query[format] || { origin_id: origin_id }
  }).then(function(trades){
    trades.forEach(function(trade){
      var queryResult = {
        import: { dest_id: trade.dest_id, import_val: trade.import_val },
        export: { dest_id: trade.dest_id, export_val: trade.export_val }
      }

      result.push(queryResult[format] || 
        { dest_id: trade.dest_id, import_val: trade.import_val, export_val: trade.export_val });
    });
    res.json(result);
  });
}

exports.findTrades = findTrades;