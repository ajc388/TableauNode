module.exports = function (app) {
	
	//GET Routes
	app.get('/', function(req, res) {
	  res.sendFile(__dirname + "/Simulator.html");
	});

	//POST Routes
}
