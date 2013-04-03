var Db = require("mongodb").Db
  , GridStore = require("mongodb").GridStore
  , http = require("http")

Db.connect("mongodb://localhost:27017/test", {native_parser:true}, function(err, db) {
  http.createServer(function(req, res) {
    GridStore.read(db, req.url.substring(1), function(err, data) {
      res.end(data);
    });
  }).listen(8082, '127.0.0.1');
});
