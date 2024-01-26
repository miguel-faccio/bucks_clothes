
const path = require('path')
const SkinDAO = require('../DAO/SkinDAO')
const PromoDAO = require('../DAO/promoDAO')
const multer = require('multer');
const fs = require('fs')
const crypto = require('crypto')

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, path.resolve('mvc/views/public/images/upload/'))
    },
    filename: function(req, file, callback){
        callback(null, crypto.randomUUID() +"_" +file.originalname)
    }
})

const upload = multer({ storage: storage })


//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {


    app.get("/addSkin", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const promoDAO = new PromoDAO()
        const lista_promo = await promoDAO.consultarPromo()
        
       
        res.render("ctrldev/skin/addskins", {promocao: lista_promo})

        
    })
    app.get("/listskins", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")

        const skinDAO = new SkinDAO()
        const lista_skins = await skinDAO.consultarSkin()

        res.render("ctrldev/skin/listskins", { Skins: lista_skins });
    })


    app.get('/pagina/atualizarskin/:id', async (req, res) => {
        const skinDAO = new SkinDAO()
        const promoDAO = new PromoDAO()
        const lista_promo = await promoDAO.consultarPromo()
        const dtskin = await skinDAO.consultarSkinId(req.params.id)

        res.render("ctrldev/skin/upskins", { skin: dtskin, promocao: lista_promo })
    })

    app.get("/skin", async (req, res) => {

        const skinDAO = new SkinDAO();
        res.setHeader("Access-Control-Allow-Origin", "*")

        res.status(201).json(await skinDAO.consultarSkin())
    })


    const cpUpload = upload.fields([{ name: 'filefoto1skin', maxCount: 1 }, { name: 'filefoto2skin', maxCount: 8 }])

    app.post("/registrarSkin", cpUpload, async (req, res) => {

        const skinDAO = new SkinDAO();
        res.setHeader("Access-Control-Allow-Origin", "*")

        const { txtid, selcatskin, txtnomeskin, txtdescskin, selgenskin, txtvalorskin, selrarskin, selpromo } = req.body

        let nomeFoto1 = req.files.filefoto1skin[0].filename
        let nomeFoto2 = req.files.filefoto2skin[0].filename

        if(!txtid){
            skinDAO.registrarSkin(selcatskin, txtnomeskin, txtdescskin, selgenskin, txtvalorskin, selrarskin, nomeFoto1, nomeFoto2, selpromo)
        }
        else{
           await skinDAO.atualizarSkin(txtid, selcatskin, txtnomeskin, txtdescskin, selgenskin, txtvalorskin, selrarskin, nomeFoto1, nomeFoto2, selpromo)
        }

        res.redirect('/listskins')
    })
    app.delete("/skinApagar/:id", async (req, res) => {
        const skinDAO = new SkinDAO();
        res.setHeader("Access-Control-Allow-Origin", "*")

        res.json(await skinDAO.apagarSkin(req.params.id))
    })
    app.get("/", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")

        const skinDAO = new SkinDAO()
        const lista_skins = await skinDAO.consultarSkin()

        res.render("loja/catalogo.ejs", { Skins: lista_skins });
    })
    app.get('/carrinho', async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.render( 'loja/carrinho.ejs')
    })
    app.get('/produtoSkin/:id', async (req, res) => {
        const skinDAO = new SkinDAO()
        const dtskin = await skinDAO.consultarSkinId(req.params.id)

         

        res.render("loja/produto.ejs", { skin: dtskin })
    })

    
  

}

