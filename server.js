//-----------------MONGO CONN.----------------------
// var http = require('http');
// var url = require('url');


// var MongoClient = require('mongodb').MongoClient;


// var fs = require("fs");
//  var mongoData = fs.readFileSync("./credentials/mongoCredentials.json");
//  var jsonContent = JSON.parse(mongoData);
//  var usr = jsonContent.mongo.user;
//  var pass = jsonContent.mongo.pass;
//  var uri = "mongodb://"+usr+":"+pass+"@datenightcluster-shard-00-00-vxfwy.mongodb.net:27017,datenightcluster-shard-00-01-vxfwy.mongodb.net:27017,datenightcluster-shard-00-02-vxfwy.mongodb.net:27017/admin?ssl=true&replicaSet=DateNightCluster-shard-0&authSource=admin";
// MongoClient.connect(uri, function(err, db) {
//       if(err) throw err;
//       console.log(db.s)
//       db.close();
// });
//-----------------MONGO CONN.----------------------

var express = require('express');
ipfilter = require('express-ipfilter').IpFilter;
var app = express();

require('./routes')(app);

var ips = ['127.0.0.1']; 


app.use(ipfilter(ips, {mode: 'allow'}));

app.listen(8080);
console.log('Listening on port 8080...');