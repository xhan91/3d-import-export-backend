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
var SitcYodp = sequelize.import('./models/sitc_yodp.js')

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

function findDetailTrades(origin_id, format, sitc_id, res) {
  var result = [];
  var query = {
    import: { origin_id: origin_id, import_val: { $ne: null }, sitc_id: sitc_id },
    export: { origin_id: origin_id, export_val: { $ne: null }, sitc_id: sitc_id }
  }

  SitcYodp.findAll({
    where: query[format] || { origin_id: origin_id, sitc_id: sitc_id }
  }).then(function(detailTrades){
    detailTrades.forEach(function(detailTrade){
      var queryResult = {
        import: { dest_id: detailTrades.dest_id, import_val: detailTrades.import_val },
        export: { dest_id: detailTrades.dest_id, export_val: detailTrades.export_val }
      }

      result.push(queryResult[format] || 
        { dest_id: detailTrades.dest_id, import_val: detailTrades.import_val, export_val: detailTrades.export_val });
    });

    res.json(result);
  });
}

exports.findTrades = findTrades;
exports.findDetailTrades = findDetailTrades;