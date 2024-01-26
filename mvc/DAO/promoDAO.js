const Promo = require("../models/promoModel")

const Database = require("../../repository/database");

class PromoDAO {

    #connection

    constructor() {
        this.#connection = new Database();
    }
    
    async consultarPromo(){
        const lista_promo = []
        const promoTable = await this.#connection.selecionarPromo()

        if (promoTable) {
            for (const promo of promoTable) {
                const objpromo = new Promo()

                objpromo.id = promo.id_promocao
                objpromo.nome = promo.nome_promocao
                objpromo.dtstart = promo.dt_start_promocao
                objpromo.dtend = promo.dt_end_promocao
                objpromo.desc = promo.descr_promocao
                objpromo.ativar = promo.ativa_promocao
                objpromo.desconto = promo.descontos_id_desconto
                
                lista_promo.push(objpromo.toJson())
            }
        }

        return lista_promo
    }
   

    async consultarPromoId(id) {

        const promo = await this.#connection.selecionarPromoId(id)
              
        const objpromo = new Promo()

        objpromo.id = promo[0].id_promocao
        objpromo.nome = promo[0].nome_promocao
        objpromo.dtstart = promo[0].dt_start_promocao
        objpromo.dtend = promo[0].dt_end_promocao
        objpromo.desc = promo[0].descr_promocao
        objpromo.ativar = promo[0].ativa_promocao
        
       

        return objpromo.toJson()
    }

    registrarPromo(nome, dtstart, dtend, desc, ativar, desconto ){
    
        const promo= new Promo()

        promo.nomePromo = nome 
        promo.dtstartPromo = dtstart 
        promo.dtendPromo =  dtend   
        promo.descPromo = desc
        promo.atvPromo =  ativar
        promo.desconto = desconto
        

        this.#connection.insertPromo(promo.nomePromo, promo.dtstartPromo, promo.dtendPromo, promo.descPromo, promo.atvPromo, promo.desconto)
    }

    async atualizarPromo(id, nome, dtstart, dtend, desc, ativar, desconto){
    
        const promo = new Promo()

        promo.id = id
        promo.nome = nome 
        promo.dtstart = dtstart
        promo.dtend = dtend
        promo.desc = desc
        promo.ativar = ativar
        promo.desconto = desconto

        const dt = await this.#connection.updatePromo(promo.nome, promo.dtstart, promo.dtend, promo.desc, promo.ativar, promo.desconto, promo.id)
        return dt
    }

    async apagarPromo(id){
     const dados =  await this.#connection.deletePromo(id)
     return dados
    }
}

module.exports = PromoDAO


