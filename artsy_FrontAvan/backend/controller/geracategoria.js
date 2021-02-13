var db = require('../db');
exports.geraCat = (req, res) => {
    let sql = "SELECT DISTINCT categoria from produtos";
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        //console.log(JSON.parse(JSON.stringify(result)));
        return res.status(200).json({query:JSON.parse(JSON.stringify(result))})
      });
    //console.log(result)
}