
module.exports = function(app){
    var sessionManager = require('./controllers/sessionManager');
    app.get('/createSession', sessionManager.findAll);
    app.get('/createSession/:id', sessionManager.findById);
    app.post('/createSession', sessionManager.add);
    app.put('/createSession/:id', sessionManager.update);
    app.delete('/deleteSession/:id', sessionManager.delete);
}