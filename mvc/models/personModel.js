//Representa uma Cupom do mundo real, concorda?
class Person{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    #nomePerson
        get nomePerson(){
        return this.#nomePerson
    }
    set nomePerson(value) {
        this.#nomePerson = value
    }
    #generoPerson
        get generoPerson(){
            return this.#generoPerson
    }
        set generoPerson(value){
            this.#generoPerson = value
    }
    #tipoPerson
        get tipoPerson(){
            return this.#tipoPerson
        }
        set tipoPerson(value){
            this.#tipoPerson = value
        }
    #totalcoinPerson
        get totalcoinPerson(){
            return this.#totalcoinPerson
        }
        set totalcoinPerson(value){
            this.#totalcoinPerson = value
        }
    #startlatitudePerson
        get startlatitudePerson(){
            return this.#startlatitudePerson
        }
        set startlatitudePerson(value){
            this.#startlatitudePerson = value
        }
    #startlongitudePerson
        get startlongitudePerson(){
            return this.#startlongitudePerson
        }    
        set startlongitudePerson(value){
            this.#startlongitudePerson = value
        }
    #skinIdPerson
        get skinIdPerson(){
            return this.#skinIdPerson
        }    
        set skinIdPerson(value){
            this.#skinIdPerson = value
        }
   


  
    //é um tipo de método padrão. Ele é invocado
    //quando o objeto é criado, ou seja, ele vai te
    //acompanhar e obrigar a passar os parametros declarados, se tiver.
    //exemplo const a = new Cupom("Batata","Frita",100)
    constructor(nomePerson, generoPerson, tipoPerson, totalcoinPerson, startlatitudePerson, startlongitudePerson, skinIdPerson){
        this.#nomePerson = nomePerson
        this.#generoPerson = generoPerson
        this.#tipoPerson = tipoPerson
        this.#totalcoinPerson = totalcoinPerson
        this.#startlatitudePerson = startlatitudePerson
        this.#startlongitudePerson = startlongitudePerson
        this.#skinIdPerson = skinIdPerson
       

    }

     
    toJson(){
        return {
            "id": this.#id,
            "nome": this.#nomePerson,
            "genero": this.#generoPerson,
            "tipo": this.#tipoPerson,
            "coins": this.#totalcoinPerson,
            "latitudeStart": this.#startlatitudePerson,
            "longitudeStart": this.#startlongitudePerson,
            "skinPerson": this.#skinIdPerson,
           

        }
    }
}


module.exports = Person