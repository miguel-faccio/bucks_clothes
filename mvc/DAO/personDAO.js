const Person = require("../models/personModel");
const Database = require("../../repository/database");

class PersonDAO {

    #connection

    constructor() {
        this.#connection = new Database();
    }
    
    async consultarPerson(){
        const lista_person = []
        const personTable = await this.#connection.selecionarPersons()

        if (personTable) {
            for (const person of personTable) {
                const objperson = new Person()

                objperson.id = person.id_personagem
                objperson.nomePerson = person.nome_personagem
                objperson.totalcoinPerson = person.totalcoin_personagem
                objperson.generoPerson = person.genero_personagem
                objperson.tipoPerson = person.tipo_personagem
                objperson.startlatitudePerson = person.start_latitude
                objperson.startlongitudePerson = person.start_longitude
                objperson.skinIdPerson = person.skins_id_skin
                

                lista_person.push(objperson.toJson())
            }
        }

        return lista_person
    }
   

    async consultarPersonId(id) {

        const person = await this.#connection.selecionarPersonsId(id)
              
        const objperson = new Person()

        objperson.id = person[0].id_personagem
        objperson.nomePerson = person[0].nome_personagem 
        objperson.totalcoinPerson = person[0].totalcoin_personagem
        objperson.generoPerson = person[0].genero_personagem
        objperson.tipoPerson = person[0].tipo_personagem	
        objperson.startlatitudePerson = person[0].start_latitude
        objperson.startlongitudePerson = person[0].start_longitude
       

        return objperson.toJson()
    }

    registrarPerson(nome,totalcoin, genero, tipo, latitudeStart, longitudeStart, skinPerson ){
    
        const person= new Person()

        person.nomePerson = nome 
        person.totalcoinPerson = totalcoin
        person.generoPerson = genero
        person.tipoPerson = tipo
        person.startlatitudePerson = latitudeStart
        person.startlongitudePerson = longitudeStart
        person.skinPersonagem = skinPerson
        

        this.#connection.insertPerson(person.nomePerson,person.totalcoinPerson, person.generoPerson, person.tipoPerson,  person.startlatitudePerson, person.startlongitudePerson, person.skinPersonagem)
    }

    async atualizarPerson(id, nome, totalcoin, tipo, genero, latitudeStart, longitudeStart, skinPerson){
    
        const person = new Person()

        person.id = id
        person.nomePerson = nome 
        person.totalcoinPerson = totalcoin
        person.generoPerson = genero
        person.tipoPerson = tipo
        person.startlatitudePerson = latitudeStart
        person.startlongitudePerson = longitudeStart
        person.skinIdPerson = skinPerson
        


        const dt = await this.#connection.updatePerson(person.nomePerson, person.totalcoinPerson, person.generoPerson, person.tipoPerson, person.startlatitudePerson, person.startlongitudePerson, person.skinIdPerson, person.id)
        return dt
    }

    async apagarPerson(id){
     const dados =  await this.#connection.deletePerson(id)
     return dados
    }
}

module.exports = PersonDAO


