module.exports = function(app, MongoClient, url) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	
	var str = "";

	 app.get('/loggedin', function(req, res) {
		console.log(req.query);
		console.log(url);
		MongoClient.connect(url, async function(err, databaseSet) {
			console.log("connected to url" + url);
		    db = databaseSet.db("FirstDb");
			if(!err){
				var cursor = db.collection('Login').find({"username":req.query.user});
				console.log("cursor returned");
				//noinspection JSDeprecatedSymbols
				 while ((item = await cursor.next()) != null) {
					if (item != null) {
						if(req.query.password == item.password ) {
							// user is on client side and username is on server side
							res.cookie("username", item.username);
							//defining the cookie and assigning username as value
							console.log("password correct");
							res.sendfile('./public/index.html')
							return;
						}
						else{
							console.log("passowrd incorrect");
							 res.sendfile('./public2/error.html');
							return;
						}
					}
				 }
				
				console.log("no entry in database");
				res.sendfile('./public2/error.html');
				return;
				
			}
			else{
				console.log(err);
			}
			
			
            databaseSet.close();
        });
	 	//res.sendfile('./public2/error.html');
	});




	// signup part

	app.get('/signnedup', function(req, res)
	{
		
		console.log(req.query);
		console.log(url);

		MongoClient.connect(url, async function(err, databaseSet) {
			console.log("connected to url" + url);
			db = databaseSet.db("FirstDb");
			console.log("db ys");
			if(!err)
			{
				var myobj = {"username":req.query.user,"password":req.query.password};
				var cursor = db.collection('Login').insertOne(myobj, function(err, result){
					if(!err)
					{
						console.log("1 doc inserted");
						res.sendfile('./public2/index2.html')
						
						return;
						// console.log("1 doc inserted");
							
					}
					else{
					console.log(err);
					}  
				    
                });
	 	//res.sendfile('./public2/error.html');
	        }
			else{
				console.log(err);
			}
			databaseSet.close();
		});
});

// for profile submission
app.get('/Submitprof', function(req, res)
	{
		username  = req.headers.cookie.split("=")[1]
		// req for cookie to use it in collection userprofile
		console.log(username);
		console.log(req.query);
		console.log(url);

		MongoClient.connect(url, async function(err, databaseSet) {
			console.log("connected to url" + url);
			db = databaseSet.db("FirstDb");
			console.log("db ys");
			if(!err)
			{
				var myobj = {"username":username,"firstname":req.query.firstname,"lastname":req.query.lastname,"gender":req.query.gender,
				"birthdate":req.query.birthdate,"country":req.query.country,"Graduation":req.query.Graduation,
				"collegename":req.query.collegename,"passyear":req.query.passyear,"subject":req.query.subject,
			     "Skills":req.query.Skills};
				var cursor = db.collection('UserProfile').insertOne(myobj, function(err, result){
					if(!err)
					{
						console.log("1 doc inserted");
						
						res.sendfile('./public/index.html')
						
						return;
						// console.log("1 doc inserted");
							
					}
					else{
					console.log(err);
					}  
				    
                });
	 	//res.sendfile('./public2/error.html');
	        }
			else{
				console.log(err);
			}
			databaseSet.close();
		});
});

app.get("/queryProfile",function(req, res){
	    username  = req.headers.cookie.split("=")[1];
		console.log(username);
	    console.log(req.query);
		console.log(url);

		MongoClient.connect(url, async function(err, databaseSet) {
			console.log("connected to url" + url);
			db = databaseSet.db("FirstDb");
			console.log("db ys");
			if(!err){
				var cursor = db.collection('UserProfile').find({"username":username});
				console.log("cursor returned");
				//noinspection JSDeprecatedSymbols
				 while ((item = await cursor.next()) != null) {
					if (item != null) {
						if(username == item.username ) {
							console.log("username correct");
							res.send(item);
						
							return;
						}
						else{
							console.log("passowrd incorrect");
							 res.sendfile('./public2/error.html');
							return;
						}
					}
				 }
				
				console.log("no entry in database");
				res.sendfile('./public2/error.html');
				return;
				
			}
			else{
				console.log(err);
			}
			
			
            databaseSet.close();
        });
	 	//res.sendfile('./public2/error.html');
	});


	//mongo db query 
	//item = mongo db returned data
// 	res.send(item)
// })

app.get("", function(req, res) {	
	console.log("coming to *");
	res.sendfile('./public2/index2.html');
	console.log("sent ./public2/index.html ")
});

app.get("*", function(req, res) {	
		console.log("coming to *");
		res.sendfile('./public2/index2.html');
		console.log("sent ./public2/index.html ")
	});
}