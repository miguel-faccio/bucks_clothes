
//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')
const DescontoDAO = require('../DAO/descontoDAO')




//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {   

   
    app.get("/adddesconto", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

        res.sendFile(path.resolve("mvc/views/ctrldev/desconto/adddescontos.html"))
    })
    app.get("/listdesconto", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        const descontoDAO = new DescontoDAO()
        const lista_desconto = await descontoDAO.consultarDesconto()
       
    
        res.render("ctrldev/desconto/listdescontos", {desconto: lista_desconto})
    })
  

    app.get('/pagina/atualizardesconto/:id', async (req, res) => {
        const descontoDAO = new DescontoDAO()

        const dtdesconto = await descontoDAO.consultarDescontoId(req.params.id)

        res.render("ctrldev/desconto/updescontos",{desconto: dtdesconto })
    })

    app.get("/desconto", async (req, res) =>{

        const descontoDAO = new DescontoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await descontoDAO.consultarDesconto())
    })
    app.post("/registrarDesconto", (req, res) =>{
        
        const descontoDAO = new DescontoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {txtvalordesconto} = req.body
       

        descontoDAO.registrarDesconto(txtvalordesconto)

        
        res.redirect('/listdesconto')
    })
    app.delete("/descontoApagar/:id", async (req,res) => {
        const descontoDAO = new DescontoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.json(await descontoDAO.apagarDesconto(req.params.id))
    })
    app.put("/descontoAlterar", async (req, res) => {
        const descontoDAO = new DescontoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {valor, id} = req.body
       
        const r = await descontoDAO.atualizarDesconto(id, valor)
      
        res.json({r})
        
    })

}




