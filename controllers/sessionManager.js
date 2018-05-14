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
    var data = {"bla": "gg"};
    //data = dbConnection.get(id);
    res.send(data);
};

exports.add = function(req, res) {
    var url = req.query.nflxURL;
    var playState = req.query.playState;
    if(url != undefined &&  playState != undefined) {
      console.log("NFLX URL: " + req.query.nflxURL);
      console.log("PLAY STATE: " + req.query.playState);
      //create an entry in the DB
    }
    var data = {}
    data["sessionID"] = generateSessionID();
    data["nflxURL"] = url;
    data["playState"] = playState;
    res.status(200).send(data);
};

function generateSessionID(netflixURL, playState) {
    return "ABC123";
}


exports.update = function(req,res) {

};
exports.delete = function(req, res) {
    
};