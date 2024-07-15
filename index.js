const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001; 
const routes = require('./routes.json');
    
const app = jsonServer.create();
const router = jsonServer.router("dados.json");
const dbcotas = jsonServer.router("cotas.json");
    
app.db = router.db;
app.db = dbcotas.db;
    
const rules = auth.rewriter(
routes);
    
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.use(dbcotas);
app.listen(port);
    
console.log("Server is running on port:", port);