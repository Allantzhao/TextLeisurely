const pg = require('pg');

const connection = new pg.Pool({
  database: 'textdb',
});

connection.connect();


var saveText = function(phoneNumber, message, sendAt, callback) {
  connection.query(`INSERT INTO texts(phoneNumber, message, sendAt) VALUES('${phoneNumber}', '${message}', '${sendAt}')`, (err, results) => {
    if(err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  saveText,
}
