
class Skin{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
    #categoriaSkin
    get categoriaSkin(){
        return this.#categoriaSkin
    }
    set categoriaSkin(value){
        this.#categoriaSkin = value
    }

    #nomeSkin
        get nomeSkin(){
        return this.#nomeSkin
    }
    set nomeSkin(value) {
        this.#nomeSkin = value
    }

    #descrSkin
        get descricaoSkin(){
            return this.#descrSkin
        }
        set descricaoSkin(value){
            this.#descrSkin = value
        }
    
    #generoSkin
        get generoSkin(){
            return this.#generoSkin
        }
        set generoSkin(value){
            this.#generoSkin = value
        }
    
    #valorSkin
        get valorSkin(){
            return this.#valorSkin
        }
        set valorSkin(value){
            this.#valorSkin = value
        }
    
    #raridadeSkin
        get raridadeSkin(){
            return this.#raridadeSkin
        }
        set raridadeSkin(value){
            this.#raridadeSkin = value
        }

    #foto1Skin
        get foto1Skin(){
            return this.#foto1Skin
        }
        set foto1Skin(value){
           this.#foto1Skin = value
        }

    #foto2Skin
        get foto2Skin(){
            return this.#foto2Skin
        }
        set foto2Skin(value){
            this.#foto2Skin = value
        }
     
    #promoSkin
        get promoSkin(){
            return this.#promoSkin
        }    
        set promoSkin(value){
            this.#promoSkin = value
        }
  
    //é um tipo de método padrão. E le é invocado
    //quando o objeto é criado, ou seja, ele vai te
    //acompanhar e obrigar a passar os parametros declarados, se tiver.
    //exemplo const a = new Cupom("Batata","Frita",100)
    constructor(categoriaSkin, nomeSkin, descricaoSkin, generoSkin, valorSkin, raridadeSkin, foto1Skin, foto2Skin, promoSkin){
        this.#categoriaSkin = categoriaSkin
        this.#nomeSkin = nomeSkin
        this.#descrSkin = descricaoSkin
        this.#generoSkin = generoSkin
        this.#valorSkin = valorSkin
        this.#raridadeSkin = raridadeSkin
        this.#foto1Skin = foto1Skin
        this.#foto2Skin = foto2Skin
        this.#promoSkin = promoSkin
       

    }

     
    toJson(){
        return {
            "id": this.#id,
            "categoria": this.#categoriaSkin,
            "nome": this.#nomeSkin,
            "descricao": this.#descrSkin,
            "genero": this.#generoSkin,
            "valor": this.#valorSkin,
            "raridade": this.#raridadeSkin,
            "foto1": this.#foto1Skin,
            "foto2": this.#foto2Skin,
            "promoSkin": this.#promoSkin,
           

        }
    }
}


module.exports = Skin