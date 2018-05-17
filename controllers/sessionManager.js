var Session = require("../models/session");
const mongoose = require("mongoose");

exports.findAll = function(req, res){
    res.send([{
      "id": 1,
      "name": "Max",
      "band": "Maximum Pain",
      "instrument": "guitar"
    }]);
};
exports.findById = function(req, res) {
    //get value JSON from server for given session ID
    const id = req.params.id;
    console.log("finding by id: " + req.query.id);

    Session.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.add = function(req, res) {
    var url = req.query.nflxURL;
    var ps = req.query.playState;
    console.log("NFLX URL: " + req.query.nflxURL);
    console.log("PLAY STATE: " + req.query.playState);

    if(url != undefined &&  ps != undefined) {
      
      //create an entry in the DB
      var session = new Session({
            _id: new mongoose.Types.ObjectId(),
            nflxURL: url,
            playState: ps
      });
      session.save().then(result => {
          console.log(result);
      })
      .catch(err => console.log(err));
    }

    var data = {}
    data["sessionID"] = generateSessionID();
    data["nflxURL"] = url;
    data["playState"] = ps;
    res.status(200).send(data);
};

exports.update = function(req,res) {

};
exports.delete = function(req, res) {

};