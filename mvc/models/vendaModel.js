

class Vendas{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    #horaVenda
        get horavenda(){
            return this.#horaVenda
        }
        set horavenda(value){
            this.#horaVenda = value
        }
    
    #diaVenda 
        get diavenda(){
            return this.#diaVenda
        }   
        set diavenda(value){
            this.#diaVenda = value
        }
        
    #skinVenda
        get skinvenda(){
            return this.#skinVenda
        }
        set skinvenda(value){
            this.#skinVenda = value
        }

    #cupomVenda
        get cupomvenda(){
            return this.#cupomVenda
        }
        set cupomvenda(value){
            this.#cupomVenda = value
        }

    constructor(horavenda, diavenda, skinvenda, cupomvenda){
       this.#horaVenda = horavenda
       this.#diaVenda = diavenda
       this.#skinVenda = skinvenda
       this.#cupomVenda = cupomvenda 
    }

    toJson(){
        return {
            "id": this.#id,
            "horavenda": this.#horaVenda,
            "diavenda": this.#diaVenda,
            "skinvenda": this.#skinVenda,
            "cupomvenda": this.#cupomVenda,
        }
    }
}


module.exports = Vendas