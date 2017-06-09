var express = require('express');
var app = express();
var path = require('path');

var functionalities = require('./functionalities.js');

// API for search battel record 
app.post("/search",function(req,res){
	functionalities.search(req,function(err,result){
		res.statusCode =  result.http_code; 
        res.json(result);
	})
})

// ApI for group battel recoed
app.get("/groupAttackerKing",function(req,res){
	functionalities.groupAttackerKing(req,function(err,result){
		res.statusCode =  result.http_code; 
        res.json(result);
	})
})

// API for Max Win, Max Loss And Max War
app.get("/winlosswar",function(req,res){
	functionalities.MaxWinMaxLossMaxWar(req,function(err,result){
		res.statusCode =  result.http_code; 
        res.json(result);
	})
})

// API for fetchig list of king sorted by win and loss. Assuming Win : +2 point And Loss : -1  
app.get("/listofking",function(req,res){
	//console.log("working");
	functionalities.listOfKing(req,function(err,result){
		res.statusCode =  result.http_code; 
        res.json(result);
	})
})

module.exports = app;
