var settings = require( '../settings.js' );

module.exports.router = function(app) {
    app.use(
	    function(req, res, next) {
		if (settings.LOG_LEVEL > 1) {
		    console.log(req.method + " ->", req.path);
		}
		next();
	    });
    
    app.get('/*', function(req, res) {
	    res.sendfile('./dist/' + req.path);
	});
}
	
