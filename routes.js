module.exports = function (app) {
	
	//GET Routes
	app.get('/StockConnector.html', function(req, res) {
	  res.sendFile(__dirname + "/StockConnector.html");
	});

	app.get('/simulator.html', function(req, res) {
	  res.sendFile(__dirname + "/Simulator.html");
	});

	app.get('/simulator.css', function(req, res) {
	  res.sendFile(__dirname + "/assets/css/simulator.css");
	});

	app.get('/simulator.js', function(req, res) {
	  res.sendFile(__dirname + "/assets/js/simulator.js");
	});


	//POST Routes
}
