var db = require('../db');

exports.listProd= (req, res) =>{
    var sql = "SELECT * FROM produtos";
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        //console.log(JSON.parse(JSON.stringify(result)));
        return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
      });
}

exports.getProd= (req, res) =>{
    let cat = req.query["cat"];
    let est = req.query["est"];
    let sql =''
    if ((cat == "") && (est == "")) {
        sql = "SELECT * FROM produtos";
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
          });
    } else if (est == ""){
        sql = "SELECT * FROM produtos WHERE categoria = ?";
        db.query(sql, [cat],function (err, result, fields) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
          });
    } else if (cat == ""){
        sql = "SELECT * FROM produtos as p JOIN estoque as e ON e.local= ? and p.idproduto=e.idproduto";
        db.query(sql, [est],function (err, result, fields) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
          });
    } else {
        sql = "SELECT * FROM produtos as p JOIN estoque as e ON e.local= ? and p.idproduto=e.idproduto WHERE categoria = ?";
        db.query(sql, [est, cat],function (err, result, fields) {
            if (err) throw err;
            //console.log(JSON.parse(JSON.stringify(result)));
            return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
          });
    }
}
