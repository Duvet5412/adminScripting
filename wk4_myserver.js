/*

// This application to demo the use of restfull services

// This is the core for any MV* pattern

// let me know if you have any question 

// use express server it must be in the node_modules

*/ 

// setup

var express=require("express");

var http=require("http");

var app=express(); 

// run the server 

http.createServer(app).listen(55555);

console.log('Express server listening on port 55555'); 

// <<< here is the Model, the data storage 

var products = [

         { id: 0, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00 },

         { id: 1, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00 },

         { id: 2, name: 'sunglasses', description: 'Protect your eyes in style', price: 25.00 }

]; 

// http://localhost:55555                             // general route

// here is the refer

app.get("/", function(req,res){

  var msg=""

  msg += "<center><h1> This is the default page </h1></center>"

  msg += " use the following <br />"

  msg += " http://localhost:55555/hello <br />"

  msg += " http://localhost:55555/goodbye <br />"

  msg += " http://localhost:55555/products <br />"

  msg += " http://localhost:55555/products/2 <br />"

 

  res.send(msg);

});

 

// <<< routes = controller

// http://localhost:55555/hello                    // welcome  route

app.get("/hello", function(req,res){

  res.send("Hello ENTD261 class");

 });

 

// http://localhost:55555/goodbye                       // good bye route

app.get("/goodbye", function(req,res){

  res.send("Thank you ENTD261 class");

 });

 

// http://localhost:55555/products                       // load and display all products

app.get('/products', function(req, res) {

         res.send(JSON.stringify(products));

 });

 

// http://localhost:55555/products/2                    // load and display product id 2

app.get('/products/:id', function(req, res) {

         if (req.params.id > (products.length - 1) || req.params.id < 0) {

                 res.statusCode = 404;

                 res.end('Not Found');

         }

         res.send(JSON.stringify(products[req.params.id]));

 });