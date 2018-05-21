var Session = require("../models/session");
const mongoose = require("mongoose");

exports.findAll = function(req, res){
    Session.find().exec()
    .then(docs => {
        res.status(200).json({
            message: "Fetching all entries to the DB",
            data: docs
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            err: err
        })
    })
};

exports.findById = function(req, res) {
    //get value JSON from server for given session ID
    const id = req.params.id;
    console.log("finding by id: " + req.params.id);

    Session.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc != null) {
            res.status(200).json({
                message: "Returning result from the Database",
                sessionDetails: doc
            });
        }   
        else {
            res.status(404).json({
                message: "No valid entry found for the given ID"
            })
        }
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
};

exports.add = function(req, res) {
    var url = req.query.nflxURL;
    var ps = req.query.playState;
    console.log("NFLX URL: " + req.query.nflxURL);
    console.log("PLAY STATE: " + req.query.playState);
    var sessionId = null;
    if(url != undefined &&  ps != undefined) {
      sessionId = new mongoose.Types.ObjectId();
      //create an entry in the DB
      var session = new Session({
            _id: sessionId,
            nflxURL: url,
            playState: ps
      });
      session.save().then(result => {
        console.log(result);  
        res.status(201).json({
            message: "Handeling POST request to /createSession endpoint",
            createdSession: result
          });
      })
      .catch(err => console.log(err));
    }
};

exports.update = function(req,res) {
    var sessionId = req.params.id;
    console.log("body: " + Object.getOwnPropertyNames(req));
    console.log(req.readable);
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Session.update({_id: sessionId}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "update failed",
            error: err
        })
    }); 
};

exports.delete = function(req, res) {
    var id = req.params.id;
    Session.remove({
        _id: id
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: " Handeling DELETE request to /createSession endpoint",
            createdSession: result
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              error: err
          })
      });
};