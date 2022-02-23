let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString:
"postgres://ozcnkybb:J1r618kWoyiescPn5Cv_0pnBdoHT-T1x@kesavan.db.elephantsql.com/ozcnkybb"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { conncet }