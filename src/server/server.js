var debug = require('debug')('passport-mongo'),
    app = require('./app'),
    mogoose = require('mongoose'),
    config = require('./_config.js');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

mongoose.connect(config.mongoURI[app.settings.env]);
