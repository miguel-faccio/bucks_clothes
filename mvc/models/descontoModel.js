//Representa uma Cupom do mundo real, concorda?
class Desconto{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    #valorDesconto
        get valorDesconto(){
        return this.#valorDesconto
    }
    set valorDesconto(value){
        return this.#valorDesconto = value
    }
  
    //é um tipo de método padrão. Ele é invocado
    //quando o objeto é criado, ou seja, ele vai te
    //acompanhar e obrigar a passar os parametros declarados, se tiver.
    //exemplo const a = new Cupom("Batata","Frita",100)
    constructor(id, valorDesconto){
        this.#id = id
        this.#valorDesconto = valorDesconto
       

    }

     
    toJson(){
        return {
            "id": this.#id,
            "valorDesconto": this.#valorDesconto,
           

        }
    }
}


module.exports = Desconto