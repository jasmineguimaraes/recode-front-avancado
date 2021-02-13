var db = require('../db');

exports.listEst= (req, res) =>{
    var sql = "SELECT DISTINCT local from estoque";
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        //console.log(JSON.parse(JSON.stringify(result)));
        return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
      });
}