
const path = require('path')
const PersonDAO = require('../DAO/personDAO')
const SkinDAO = require('../DAO/SkinDAO')


//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {   

   
    app.get("/addPerson", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

        const skinDAO = new SkinDAO()
        const lista_skin = await skinDAO.consultarSkin()
        
       
        res.render("ctrldev/persons/addpersons", {skin: lista_skin})
    })
    app.get("/listperson", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        const personDAO = new PersonDAO()
        const lista_person = await personDAO.consultarPerson()
       
    
        res.render("ctrldev/persons/listpersons", {person: lista_person})
    })
  

    app.get('/pagina/atualizarpersonagem/:id', async (req, res) => {
        const personDAO = new PersonDAO()
        const skinDAO = new SkinDAO()
        const lista_skin = await skinDAO.consultarSkin()
        const dtperson = await personDAO.consultarPersonId(req.params.id)

        res.render("ctrldev/persons/upperson",{person: dtperson, skin: lista_skin })
    })

    app.get("/persons", async (req, res) =>{

        const personDAO = new PersonDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await personDAO.consultarPerson())
    })
    app.post("/registrarPerson", (req, res) =>{
        
        const personDAO = new PersonDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {txtnomeperson, txtcoinperson, selgenperson, seltipoperson, txtlatperson, txtlongperson, selskinperson} = req.body
       

        personDAO.registrarPerson(txtnomeperson, txtcoinperson, selgenperson, seltipoperson, txtlatperson, txtlongperson, selskinperson)

        
        res.redirect('/listperson')
    })
    app.delete("/personApagar/:id", async (req,res) => {
        const personDAO = new PersonDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.json(await personDAO.apagarPerson(req.params.id))
    })
    app.put("/personAlterar", async (req, res) => {
        const personDAO = new PersonDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        const {nome, genero, tipo, coins, latitudeStart, longitudeStart, skinPerson, id} = req.body
       
        const r = await personDAO.atualizarPerson(id, nome,coins, tipo, genero, latitudeStart, longitudeStart, skinPerson)
      
        res.json({r})
        
    })

}

