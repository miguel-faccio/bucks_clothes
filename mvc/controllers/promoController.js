
//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')
const PromoDAO = require('../DAO/promoDAO')
const DescontoDAO = require('../DAO/descontoDAO')


//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {   

   
    app.get("/addPromo", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

      
        const descontoDAO = new DescontoDAO()
        const lista_desconto = await descontoDAO.consultarDesconto()
        
       
        res.render("ctrldev/promocao/addpromocoes", {desconto: lista_desconto})
        
        
    })
    app.get("/listpromo", async (req, res) => {
       
        
        const promoDAO = new PromoDAO()
        const lista_promo = await promoDAO.consultarPromo()
       
    
        res.render("ctrldev/promocao/listpromo", {promo: lista_promo})
    })
  

    app.get('/pagina/atualizarpromocao/:id', async (req, res) => {
        const promoDAO = new PromoDAO()
        const descontoDAO = new DescontoDAO()
       const lista_desconto = await descontoDAO.consultarDesconto()
        const dtpromo = await promoDAO.consultarPromoId(req.params.id)

        res.render("ctrldev/promocao/uppromo",{promo: dtpromo , desconto: lista_desconto})
    })

    app.get("/promo", async (req, res) =>{

        const promoDAO = new PromoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await promoDAO.consultarPromo())
    })
    app.post("/registrarPromo", (req, res) =>{
        
        const promoDAO = new PromoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {txtnomepromo, dtstartpromo, dtendpromo, txtdescpromo, selativapromo, seldescpromo } = req.body
       

        promoDAO.registrarPromo(txtnomepromo, dtstartpromo, dtendpromo, txtdescpromo, selativapromo, seldescpromo)

        
        res.redirect('/listpromo')
    })
    app.delete("/promoApagar/:id", async (req,res) => {
        const promoDAO = new PromoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.json(await promoDAO.apagarPromo(req.params.id))
    })
    app.put("/promoAlterar", async (req, res) => {
        const promoDAO = new PromoDAO();
        
       
       
        res.setHeader("Access-Control-Allow-Origin","*")
        
       
        const {nome, dtstart,  dtend, desc, ativar, desconto, id} = req.body
       console.log(req.body)
        const r = await promoDAO.atualizarPromo(id, nome, dtstart, dtend, desc, ativar, desconto)
      
        res.json({r})
        
    })

}

