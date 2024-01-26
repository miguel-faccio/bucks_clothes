const Vendas = require("../models/vendaModel")

const Database = require("../../repository/database");

class VendaDAO {

    #connection

    constructor() {
        this.#connection = new Database();
    }
    
    async consultarVenda(){
        const lista_venda = []
        const vendaTable = await this.#connection.selecionarVenda()

        if (vendaTable) {
            for (const venda of vendaTable) {
                const objvenda = new Vendas()

                objvenda.horavenda = venda.hora_venda
                objvenda.diavenda = venda.dia_venda
                objvenda.skinvenda = venda.skins_id_skin
                objvenda.cupomvenda = venda.cupons_id_cupon
                
                lista_venda.push(objvenda.toJson())
            }
        }

        return lista_venda
    }
   

    async consultarVendaId(id) {

        const venda = await this.#connection.selecionarVendaId(id)
              
        const objvenda = new Vendas()

        objvenda.id = venda[0].id_venda
        objvenda.horavenda = venda[0].hora_venda
        objvenda.diavenda = venda[0].dia_venda
        objvenda.skinvenda = venda[0].skins_id_skin
        objvenda.cupomvenda = venda[0].cupons_id_cupon
       
        return objvenda.toJson()
    }

    registrarVenda(hora, dia, skin, cupom){
    
        const venda= new Vendas()

        venda.horavenda = hora
        venda.diavenda = dia
        venda.skinvenda = skin
        venda.cupomvenda = cupom
        

        this.#connection.insertVenda(venda.horavenda, venda.diavenda, venda.skinvenda, venda.cupomvenda )
    }

    async atualizarVenda(id, hora, dia, skin, cupom){
    
        const venda = new Vendas()

        venda.id = id
        venda.horavenda = hora
        venda.diavenda = dia
        venda.skinvenda = skin
        venda.cupomvenda = cupom

        const dt = await this.#connection.updateVenda(venda.horavenda, venda.diavenda, venda.skinvenda, venda.cupomvenda, venda.id)
        return dt
    }

    async apagarVenda(id){
     const dados =  await this.#connection.deleteVenda(id)
     return dados
    }
}

module.exports = VendaDAO


