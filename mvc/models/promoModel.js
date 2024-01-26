

class Promocao{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    #nomePromo
        get nome(){
        return this.#nomePromo
    }
    set nome(value) {
        this.#nomePromo = value
    }
    #dtstartPromo
        get dtstart(){
            return this.#dtstartPromo
    }
        set dtstart(value){
            this.#dtstartPromo = value
    }
    #dtendPromo
        get dtend(){
            return this.#dtendPromo
    }
        set dtend(value){
            this.#dtendPromo = value
    }
    #descPromo
        get desc(){
            return this.#descPromo
        }
        set desc(value){
            this.#descPromo = value
        }
    #atvPromo 
        get ativar(){
            return this.#atvPromo
        }
        set ativar(value){
            this.#atvPromo = value
        }
    #descontoPromo 
        get desconto(){
            return this.#descontoPromo
        }
        set desconto(value){
            this.#descontoPromo = value
        }
    
    constructor(nomePromo, dtstartPromo, dtendPromo, descPromo, atvPromo, descontoPromo  ){
        this.#nomePromo = nomePromo
        this.#dtstartPromo = dtstartPromo
        this.#dtendPromo = dtendPromo
        this.#descPromo = descPromo
        this.#atvPromo = atvPromo
        this.#descontoPromo = descontoPromo
        
     
    }

    toJson(){
        return {
            "id": this.#id,
            "nome": this.#nomePromo,
            "start": this.#dtstartPromo,
            "end": this.#dtendPromo,
            "desc": this.#descPromo,
            "ativar": this.#atvPromo,
            "desconto": this.#descontoPromo,
            
        }
    }
}


module.exports = Promocao