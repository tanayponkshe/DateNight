// var http = require('http');
// var url = require('url');


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://tponkshe:DateNight123*@datenightcluster-shard-00-00-vxfwy.mongodb.net:27017,datenightcluster-shard-00-01-vxfwy.mongodb.net:27017,datenightcluster-shard-00-02-vxfwy.mongodb.net:27017/admin?ssl=true&replicaSet=DateNightCluster-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
    if(err) throw err;
    console.log(db.s)
    db.close();
});


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true);
  console.log("host:" + req.url);
//   var text = q.query;
//   txt = text + "netflix URL:" + q.rediredtURL + "    " + "sessionID:" + q.sessionID;
  res.end("test");
}).listen(8080);