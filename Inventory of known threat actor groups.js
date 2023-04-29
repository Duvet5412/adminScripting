/*******************************************************************

***

***ENTD261

***

***Week 4
*** How to run: node w4_wilbert_bean.js

*** This Node.js app will display the inventory of known threat actor groups.

***once the server is running, you will get

***Express server listening on port 44444 

***from any browser enter http://localhost:44444/

*******************************************************************/ 

//setup
var express =  require ("express");
var http = require ("http");
var app = express();

// run the server
app.listen(44444, function(){
  console.log("server is running on port 44444");
})


// <<< here is the name of the groups, the data storage
var threatactors = [
		{id: 0, name: "Anonymous", 
				posture:"Social Justice", 
				origin:"decentralized international activist and hacktivist collective", 
				targets:"Governments and the Church of Scientology", 
				tools:"DDOS"
				},
		{id: 1, name: 'The Equation Group', 
				posture: 'Nation-Sponsored', 
				origin:'Domestic', 
				targets: 'Hard disk manufacturers (Samsung, Western Digital, Seagate, Toshiba, IBM)', 
				tools:'KillSuite'
				},
		{id: 2, name: 'Bureau 121', 
				posture: 'Nation-Sponsored', 
				origin:'North Korea', 
				targets: 'National Health Services', 
				tools:'WannaCry Ransomware'
				},
];

// http://localhost:44444									// general route
// here is the refer
app.get("/", function(req,res){
	var message = ""
	message += "<center><h1> Welcome to the Cyber Hound </h1></center>"
	message += "<center><h2>use the following </h2></center><br/>"
	message += "<center> http://localhost:44444/about_us</center><br>"
	message += "<center>http://localhost:44444/threatactors</center><br>"
	message += "<center>http://localhost:44444/threatactors/2</center><br>"
	
	res.send(message);
});

// <<< routes = controller
// http://localhost:44444/about_us                   // about_us  route
app.get("/about_us", function(req,res){
	res.send("As long as cyber threat actors and their environment remain hidden from view, there will always be enemies we can't see. An unprecedented level of cybercrime is currently affecting US residents. A ransomware attack on the city of Oakland, California, the Dole Produce Company, which completely shut down its supply chains, and the Colonial Pipeline operations, which were forced to pay a ransom because they couldn't meet the state's demand for gas supplies for residents, all resulted in the closure of public services.");
	res.send("The objective is to identify 100 threat actors operating on a global scale and make their techniques and equipment visible.");
});

// http://localhost:44444/threatactors                      // load and display all vehicles
app.get('/threatactors', function(req, res){
	res.send(JSON.stringify(threatactors));
});

// http://localhost:44444/threatactors/2                   // load and display vehicle id 3
app.get('/threatactors/:id', function(req, res){
	if(req.params.id > (threatactors.length -1) || req.params.id < 0){
		res.statusCode = 404;
		res.end('threatactors Not Found');
	}
	res.send(JSON.stringify(threatactors[req.params.id]))
});