var mongoose = require('mongoose');
var sessionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nflxURL: String,
    playState: Number
});

module.exports = mongoose.model("Session", sessionSchema);