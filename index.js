const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001; 
    
const app = jsonServer.create();
const router = jsonServer.router("dados.json");
    
app.db = router.db;
    

    
app.use(cors());
app.use(auth);
app.use(router);
app.listen(port);
    
console.log("Server is running on port:", port);