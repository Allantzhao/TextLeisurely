const pg = require('pg');

const connection = new pg.Pool({
  database: 'test',
});

connection.connect();


var selectAll = function(callback) {
  connection.query('SELECT * FROM items;', function(err, results, fields) {
    if(err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  selectAll,
}
