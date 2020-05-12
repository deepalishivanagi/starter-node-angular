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

	app.get('*', function(req, res) {
		res.sendfile('./public2/index.html');
	});

};