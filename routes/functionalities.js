
var mysql = require('mysql');
var connection = mysql.createPool({
	host :  'localhost',
	user : 'root',
	password : '',
	database : 'arshad'
});


    // function for find battel result based on given input
	exports.search = function(req,callback){
		

		//validation of given input and query preration. 
		var query = "SELECT * FROM battles WHERE 1 ";
		if(req.body.name)
			query += "and name like '" + req.body.name +"'";
		if(req.body.attacker_king)
	        query +=  "and attacker_king = '" +req.body.attacker_king +"'";
	    if(req.body.defender_king)
			query += "and defender_king ='"   + req.body.defender_king +"'" ;
		if(req.body.battle_type)
			query += "and battle_type ='" +req.body.battle_type +"'" ;
		if(req.body.attacker_commander)
			query += "and attacker_commander = '"+req.body.attacker_commander+"'";
		if(req.body.defender_commander)
			query += "and defender_commander = '"+req.body.defender_commander+"'";
		if(req.body.location)
			query += "and location = '"+req.body.location+"'";
		if(req.body.region)
			query += "and region = '"+req.body.region+"'";

		connection.query(query, function(err,result){
			if(!err && result.length === 0){
				
				var response = {
					"http_code" : 404,
					"message" : "no result match for given input"
				}
				return callback(false,response);
			}
			else if(!err){
				var response = {
					"http_code" : 200,
					"message" : result
				}
				return callback(false,response);
			}
			else{
				var response = {
					"http_code" : 500,
					"message" : err.stack
				}
				return callback(true,response);
			}
		})
	}
    


    //function for group attacker king 
	exports.groupAttackerKing = function(req,callback){	

		    // query for group attacker king.
		    var queryString = "SELECT * from battles GROUP BY attacker_king"; 

		    connection.query(queryString, function(err,result){
			    if (err){
			    	  var response = {
			   		     	"http_code" : 500,
			   			    "message"   : err.stack
			   		 }
			   		 callback(false, response);
			    }

		   	if(!err && result.length === 0)
		   	{
		   		var response = {
		   			"http_code" : 400,
		   			"message"   : "No Data is avaliable to group"
		   		}
		   		callback(false, response);
		   	}
		   	else
		   	{
		   		var response = {
		   			"http_code" : 200,
		   			"message"   :  result

		   		}
		   		callback(false, response);
		   	}

		   })

	}
    

    //function to find king with maximum win, maximum loss and maximum war in battel.
    exports.MaxWinMaxLossMaxWar = function(req,callback){

    	// query for King with maximum win in battel.
    	var queryStringForMaxLoss = "SELECT king,sum(cntt) as noofloss from (SELECT `attacker_king` as king,`attacker_outcome`,count(attacker_outcome) as cntt FROM `battles` WHERE `attacker_outcome`='loss' GROUP by `attacker_king` union SELECT `defender_king` as king,`attacker_outcome`,count(attacker_outcome) as cntt FROM `battles` WHERE `attacker_outcome`='win' GROUP by `defender_king`) as tt GROUP by king ORDER BY noofloss DESC limit 1";

    	// query for king with maximum loss in battel
    	var queryStringForMaxWin = "SELECT king,sum(cntt) as noofwins from (SELECT `attacker_king` as king,`attacker_outcome`,count(attacker_outcome) as cntt FROM `battles` WHERE `attacker_outcome`='win' GROUP by `attacker_king` union SELECT `defender_king` as king,`attacker_outcome`,count(attacker_outcome) as cntt FROM `battles` WHERE `attacker_outcome`='loss' GROUP by `defender_king`) as tt GROUP by king ORDER BY noofwins DESC limit 1";


    	//query for king with maximum attended war
		var queryStringForMaxWar = "Select king, sum(cntt) as noofwars from (SELECT attacker_king as king,count(attacker_king) as cntt FROM battles GROUP by attacker_king UNION SELECT defender_king as king,count(defender_king) as cntt FROM battles GROUP by defender_king) as tt GROUP by king ORDER BY noofwars DESC limit 1";


 		connection.query(queryStringForMaxWin,function(err,result){
			if(!err)
				connection.query(queryStringForMaxLoss,function(err1,result1){
					if(!err1){
						connection.query(queryStringForMaxWar,function(err2,result2){
							if(!err2){
								var response = {
									"http_code" : "200",
									"maxWin" : result[0],
									"maxLoss" : result1  [0],
									"maxWar" : result2[0]

								}
								callback(false , response);
							}else
								console.log(err2.stack)
						});
					}else
						console.log(err1.stack)
				});
			else
				console.log(err.stack);
		});
    }   


	exports.listOfKing = function(req,callback){
		//console.log("sdfd");
	       var queryStringForMaxWin =  "select attacker_king, sum(win) as total_point from ((select attacker_king, count(attacker_outcome)*2 as win from battles "
	       	                            +"where attacker_outcome='win' group by attacker_king) union all (select attacker_king, count(attacker_outcome)*-1 as win from battles "
	       	                            +"where attacker_outcome='loss' group by attacker_king)) as result group by attacker_king order by total_point;";
	                          var response;
	                          connection.query(queryStringForMaxWin,function(err,result){
	                          	if(err)
	                          	{
	                          		  response = {
			   			                  "http_code" : 400,
			   			                   "message"   : err.stack
			   		                }
			   		               callback(true, response);
	                          	}
	                          	else 
	                          	{
	                          		 response = {
			   			                   "http_code" : 200,
			   			                   "message"   : result
			   		                }
			   		                callback(false,response);
	                          	}
	                          	
	                          })
	}