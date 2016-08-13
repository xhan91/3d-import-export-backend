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
var SitcYodp = sequelize.import('./models/sitc_yodp.js');
var AttrSitcName = sequelize.import('./models/attr_sitc_name.js');

function sitcNames(res){
    var result = [];
    AttrSitcName.findAll({
        where: { lang: 'en', sitc_id: {$gt: 1000} }
    }).then(function(names){
        names.forEach(function(name){
            result.push({sitc_id: name.sitc_id, name: name.name, keywords: name.keywords});
        });
        res.json(result);
    });
}

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
        import: { dest_id: detailTrade.dest_id, import_val: detailTrade.import_val },
        export: { dest_id: detailTrade.dest_id, export_val: detailTrade.export_val }
      }

      result.push(queryResult[format] || 
        { dest_id: detailTrade.dest_id, import_val: detailTrade.import_val, export_val: detailTrade.export_val });
    });

    res.json(result);
  });
}

exports.findTrades = findTrades;
exports.findDetailTrades = findDetailTrades;
exports.sitcNames = sitcNames;
