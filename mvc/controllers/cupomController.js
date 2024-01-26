const path = require('path')
const CupomDAO = require('../DAO/cupomDAO')


module.exports = (app) => {   

   
    app.get("/cupom", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/views/ctrldev/cupom/addcupons.html"))
    })

    app.get("/cupom/lista", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

        const cupomDAO = new CupomDAO()
        const lista_cupons = await cupomDAO.consultarCupons()
   
        res.render("ctrldev/cupom/listcupons", { cupons: lista_cupons })
    })
    app.get('/pagina/atualizarcupom/:id', async (req, res) => {
        const cupomDAO = new CupomDAO()
 
        const dtcupom = await cupomDAO.consultarCupomId(req.params.id)
 
        res.render("ctrldev/cupom/upcupons",{cupom: dtcupom })
    })

    app.get("/cupons", async (req, res) => {
        
        const cupomDAO = new CupomDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await cupomDAO.consultarCupons())

    })

    // ... outras rotas ...

app.post("/registrarcupom", async (req, res) => {
    try {
        const cupomDAO = new CupomDAO();
        res.setHeader("Access-Control-Allow-Origin", "*");

        const { txtnomecupom, txtcodcupom, dtval, txtvalorcupom } = req.body;

       
        await cupomDAO.registrarCupom(txtnomecupom, txtcodcupom, dtval, txtvalorcupom);

        res.redirect("/cupom/lista");
    } catch (error) {
      
        res.status(500).json({ error: error.message });
    }
});



    app.delete("/cupom/apagar/:id", async (req,res) =>{
        const cupomDAO = new CupomDAO();
        res.setHeader("Access-Control-Allow-Origin","*")
    
        res.json(await cupomDAO.apagarCupom(req.params.id))

    })

    app.put("/cupom/alterar", async (req, res) => {
        const cupomDAO = new CupomDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        
        const {nome, codigo, validade, valor, id } = req.body

        const r = await cupomDAO.atualizarCupom(id, nome, codigo, validade,valor)

        res.json({r})

    })
}

