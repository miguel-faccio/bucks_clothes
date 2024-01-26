
//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')
const VendaDAO = require('../DAO/vendaDAO')
const SkinDAO = require('../DAO/SkinDAO')
const CupomDAO = require('../DAO/cupomDAO')


//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {   

   
    app.get("/addVenda", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

      
        const skinDAO = new SkinDAO()
        const cupomDAO = new CupomDAO()
        const lista_skin = await skinDAO.consultarSkin()
        const lista_cupom = await cupomDAO.consultarCupons()
        
       
        res.render("ctrldev/vendas/addvendas", {skin: lista_skin, cupom: lista_cupom})
        
        
    })
    app.get("/listvenda", async (req, res) => {
       
        
        const vendaDAO = new VendaDAO()
        const lista_venda = await vendaDAO.consultarVenda()
       
    
        res.render("ctrldev/vendas/listvendas", {venda: lista_venda})
    })
  

    app.get('/pagina/atualizarvenda/:id', async (req, res) => {
        const vendaDAO = new VendaDAO()
        const skinDAO = new SkinDAO()
        const cupomDAO = new CupomDAO()
        const lista_skin = await skinDAO.consultarSkin()
        const lista_cupom = await cupomDAO.consultarCupons()
        const dtvenda = await vendaDAO.consultarVendaId(req.params.id)

        res.render("ctrldev/vendas/upvendas",{venda: dtvenda , skin: lista_skin, cupom: lista_cupom})
    })

    app.get("/venda", async (req, res) =>{

        const vendaDAO = new VendaDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await vendaDAO.consultarVenda())
    })
    app.post("/registrarVenda", (req, res) =>{
        
        const vendaDAO = new VendaDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {horavenda, diavenda, selskinvenda, selcupomvenda } = req.body
       

        vendaDAO.registrarVenda(horavenda, diavenda, selskinvenda, selcupomvenda)

        
        res.redirect('/listvenda')
    })
    app.delete("/vendaApagar/:id", async (req,res) => {
        const vendaDAO = new VendaDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.json(await vendaDAO.apagarVenda(req.params.id))
    })
    app.put("/vendaAlterar", async (req, res) => {
        const vendaDAO = new VendaDAO();
        
        res.setHeader("Access-Control-Allow-Origin","*");
        
        const {horavenda, diavenda, skinvenda, cupomvenda, id} = req.body;
         
        
        const r = await vendaDAO.atualizarVenda(id, horavenda, diavenda, skinvenda, cupomvenda);
       
        res.json({r});
    });
    
}

