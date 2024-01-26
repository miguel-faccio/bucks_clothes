const Desconto = require("../models/descontoModel");
const Database = require("../../repository/database");

class DescontoDAO {

    #connection

    constructor() {
        this.#connection = new Database();
    }
    
    async consultarDesconto(){
        const lista_desconto = []
        const descontoTable = await this.#connection.selecionarDesconto()

        if (descontoTable) {
            for (const desconto of descontoTable) {
                const objdesconto = new Desconto()

                objdesconto.id = desconto.id_desconto
                objdesconto.valorDesconto = desconto.valor_desconto
               
                lista_desconto.push(objdesconto.toJson())
            }
        }

        return lista_desconto
    }
   

    async consultarDescontoId(id) {

        const desconto = await this.#connection.selecionarDescontoId(id)
              
        const objdesconto = new Desconto()

        objdesconto.id = desconto[0].id_desconto
        objdesconto.valorDesconto = desconto[0].valor_desconto 
       
        return objdesconto.toJson()
    }

    registrarDesconto( valor){
    
        const desconto= new Desconto()

        desconto.valorDesconto = valor 
        
    
        this.#connection.insertDesconto(desconto.valorDesconto,desconto.id)
    }

    async atualizarDesconto(id, valor){
    
        const desconto = new Desconto()

        desconto.id = id
        desconto.valorDesconto = valor 
        
        const dt = await this.#connection.updateDesconto(desconto.valorDesconto, desconto.id)
        return dt
    }

    async apagarDesconto(id){
     const dados =  await this.#connection.deleteDesconto(id)
     return dados
    }
}

module.exports = DescontoDAO