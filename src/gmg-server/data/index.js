const sqlite3 = require('sqlite3')
const SQLite = require('sqlite')
const Path = require('path')

let db

module.exports.initialize = ({ logger }) => {
   const db_path = Path.join(__dirname, './grill_data.db')

   logger('Initializing db: [%s]', db_path)
   //db = SQLite.open(db_path, { Promise })
   db = SQLite.open({filename: db_path, driver: sqlite3.Database, mode: sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE}, { Promise })
   }

module.exports.createDb = async () => db