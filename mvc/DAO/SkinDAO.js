const Skin = require("../models/skinModel");
const Database = require("../../repository/database");

class SkinDAO {

    #connection

    constructor() {
        this.#connection = new Database();
    }
    
    async consultarSkin(){
        const lista_skin = []
        const skinTable = await this.#connection.selecionarSkins()

        if (skinTable) {
            for (const skin of skinTable) {
               
                const objskin = new Skin()

                objskin.id = skin.id_skin
                objskin.categoriaSkin = skin.categoria_skin
                objskin.nomeSkin = skin.nome_skin
                objskin.descricaoSkin = skin.descr_skin
                objskin.generoSkin = skin.genero_skin
                objskin.valorSkin = skin.valor_skin
                objskin.raridadeSkin = skin.raridade_skin
                objskin.foto1Skin = skin.foto1_skin
                objskin.foto2Skin = skin.foto2_skin
                objskin.promoSkin = skin.promocoes_id_promocao
            
                lista_skin.push(objskin.toJson())
            }
        }

        return lista_skin
    }
   

    async consultarSkinId(id) {

        const skin = await this.#connection.selecionarSkinsId(id)
              
        const objskin = new Skin()

        objskin.id = skin[0].id_skin
        objskin.generoSkin = skin[0].genero_skin
        objskin.nomeSkin = skin[0].nome_skin
        objskin.descricaoSkin = skin[0].descr_skin
        objskin.categoriaSkin = skin[0].categoria_skin
        objskin.valorSkin = skin[0].valor_skin
        objskin.raridadeSkin = skin[0].raridade_skin
        objskin.foto1Skin = skin[0].foto1_skin
        objskin.foto2Skin = skin[0].foto2_skin
        
       

        return objskin.toJson()
    }

    registrarSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, promo ){
    
        const skin = new Skin()

        skin.categoriaSkin = categoria
        skin.nomeSkin = nome 
        skin.descricaoSkin = descricao
        skin.generoSkin = genero
        skin.valorSkin = valor
        skin.raridadeSkin = raridade
        skin.foto1Skin = foto1
        skin.foto2Skin = foto2 
        skin.promoSkin = promo
        

        this.#connection.insertSkin(skin.categoriaSkin, skin.nomeSkin,  skin.descricaoSkin, skin.generoSkin,  skin.valorSkin , skin.raridadeSkin, skin.foto1Skin, skin.foto2Skin, skin.promoSkin )
    }

    async atualizarSkin(id, categoria,  nome, descricao, genero, valor, raridade, foto1, foto2 ){
    
        const skin = new Skin()

        skin.id = id
        skin.categoriaSkin = categoria
        skin.nomeSkin = nome 
        skin.descricaoSkin = descricao
        skin.generoSkin = genero
        skin.valorSkin = valor
        skin.raridadeSkin = raridade
        skin.foto1Skin = foto1
        skin.foto2Skin = foto2 
        


        const dt = await this.#connection.updateSkin(skin.categoriaSkin, skin.nomeSkin,  skin.descricaoSkin, skin.generoSkin,  skin.valorSkin , skin.raridadeSkin, skin.foto1Skin, skin.foto2Skin, skin.id)
        return dt
    }

    async apagarSkin(id){
     const dados =  await this.#connection.deleteSkin(id)
     return dados
    }
}

module.exports = SkinDAO


