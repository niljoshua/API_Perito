const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001; 
    
const app = jsonServer.create();
const router = jsonServer.router("dados.json");
    
app.db = router.db;
    
let items = {};

app.post('/db_cotas', (req, res) => {
  const { id, n_cotas, valor_cotas } = req.body;
  items[id] = { n_cotas, valor_cotas };
  res.status(200).send('Item cadastrado ou atualizado com sucesso!');
});
    
app.use(cors());
app.use(auth);
app.use(router);
app.listen(port);
    
console.log("Server is running on port:", port);