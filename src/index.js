const express = require("express");
const app = express();

// Endpoints
app.get('/', (req,res)=> {
	res.send('Hola mundo 201602836, 1er cambio bugfix, 2ndo cambio hotfix');
});

app.listen(3000, ()=> {
	console.log("Server listening on port: 3000, Hola mundo 201602836");
});
