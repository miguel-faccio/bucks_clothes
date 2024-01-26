const mysql = require("mysql2")

class Database {

    #connection

    constructor() {

        //Configuração do banco
        this.#connection = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "bdgp"
        }).promise()
    }
//cupom
async selecionarCupons() {
    const cuponsData = await this.#connection.query("select * from cupons;")
    return cuponsData[0]
}

async selecionarCupomId(id) {
    const cuponsData = await this.#connection.query("select * from cupons where id_cupom ="+id)
    return cuponsData[0]
}

async insertCupom(nome, codigo, validade, valor) {
    const retorno = await this.#connection.execute(`
    INSERT INTO cupons (codigo_cupom, nome_cupom, validade_cupom, valor_cupom) VALUES
    ('${codigo}', '${nome}', '${validade}', ${valor});
  `)

} async deleteCupom(id) {
    const sql = `
    delete from cupons
    where id_cupom = ${id};
    `

    const dt = await this.#connection.execute(sql)
    return dt[0]
}

 async updateCupom(codigo, nome, validade, valor, id) {
    const sql = `  update cupons
        set codigo_cupom = "${codigo}",
            nome_cupom = "${nome}",
            validade_cupom = "${validade}",
            valor_cupom = ${valor}
        where id_cupom = ${id};`

    const dtbs = await this.#connection.execute(sql)
    return dtbs[0]
}
    // personagens.
    async selecionarPersons() {
        const personData = await this.#connection.query("select * from personagens;")
        return personData[0]
    }
    async selecionarPersonsId(id) {
        const personData = await this.#connection.query("select * from personagens where id_personagem ="+id)
        return personData[0]
    }
    async insertPerson(nome, totalcoin, genero, tipo, latitudeStart, longitudeStart, skinPerson) {
        //console.log({nome, genero, tipo, totalcoin, latitudeStart, longitudeStart})//
        const sql = `
        INSERT INTO personagens (nome_personagem, totalcoin_personagem, genero_personagem, tipo_personagem, start_latitude, start_longitude, skins_id_skin ) VALUES
        ('${nome}',${totalcoin},'${genero}', '${tipo}',  ${latitudeStart}, ${longitudeStart}, '${skinPerson}' );
      `
      const bd = await this.#connection.execute(sql)
      return bd[0]
    }
    async deletePerson(id) {
        const sql = `
        delete from personagens
        where id_personagem = ${id};
        `

        const dt = await this.#connection.execute(sql)
        return dt[0]
    }
    async updatePerson(nome, totalcoin, genero, tipo, latitudeStart, longitudeStart, skinPerson, id) {
    
        const sql = `  update personagens
            set 
            nome_personagem = "${nome}",
            totalcoin_personagem = "${totalcoin}",
            genero_personagem = "${genero}",
            tipo_personagem = "${tipo}",
            start_latitude = "${latitudeStart}",
            start_longitude = "${longitudeStart}",
            skins_id_skin = "${skinPerson}"
            where id_personagem = ${id};`

        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }

    //promoção
    async selecionarPromo() {
        const promoData = await this.#connection.query("select * from promocoes;")
        return promoData[0]
    }
    async selecionarPromoId(id) {
        const promoData = await this.#connection.query("select * from promocoes where id_promocao ="+id)
        return promoData[0]
    }
    async insertPromo(nome, dtstart, dtend, desc, ativar, desconto) {
        
        const sql = `
        INSERT INTO promocoes (
        nome_promocao,
        dt_start_promocao,
        dt_end_promocao,
        descr_promocao,
        ativa_promocao,
        descontos_id_desconto
        ) VALUES
        ('${nome}','${dtstart}', '${dtend}', '${desc}', '${ativar}', '${desconto}' );
      `
      const bd = await this.#connection.execute(sql)
      return bd[0]
    }
    async deletePromo(id) {
        const sql = `
        delete from promocoes
        where id_promocao = ${id};
        `

        const dt = await this.#connection.execute(sql)
        return dt[0]
    }
    async updatePromo(nome, dtstart, dtend, desc, ativar, desconto, id) {
    
        const sql = `  update promocoes
            set 
            nome_promocao = "${nome}",
            dt_start_promocao = "${dtstart}",
            dt_end_promocao = "${dtend}",
            descr_promocao = "${desc}",
            ativa_promocao = "${ativar}",
            descontos_id_desconto = "${desconto}"
            where id_promocao = ${id};`

        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }

    //skins
    async selecionarSkins() {
        const skinData = await this.#connection.query("select * from skins;")
        return skinData[0]
    }
    async selecionarSkinsId(id) {
        const skinData = await this.#connection.query("select * from skins where id_skin ="+id)
        return skinData[0]
    }
    async insertSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2,  promo ) {
       
        const sql = `
        INSERT INTO skins (categoria_skin, nome_skin, descr_skin, genero_skin, valor_skin, raridade_skin, foto1_skin, foto2_skin, promocoes_id_promocao ) VALUES
        ('${categoria}','${nome}','${descricao}','${genero}', '${valor}',  '${raridade}', '${foto1}', '${foto2}', '${promo}' );
      `
      const bd = await this.#connection.execute(sql)
      return bd[0]
    }
    async deleteSkin(id) {
        const sql = `
        delete from skins
        where id_skin = ${id};
        `

        const dt = await this.#connection.execute(sql)
        return dt[0]
    }
    async updateSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, id) {
    
        const sql = `  update skins
            set 
            categoria_skin = "${categoria}",
            nome_skin = "${nome}",
            descr_skin = "${descricao}",
            genero_skin = "${genero}",
            valor_skin = "${valor}",
            raridade_skin = "${raridade}",
            foto1_skin = "${foto1}",
            foto2_skin = "${foto2}"
            where id_skin = ${id};`

        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }

    //desconto -
 
    async selecionarDesconto() {
        const descontoData = await this.#connection.query("select * from descontos;")
        return descontoData[0]
    }

 
    async selecionarDescontoId(id) {
        const descontoData = await this.#connection.query("select * from descontos where id_desconto ="+id)
        return descontoData[0]
    }
 
    async insertDesconto( valor) {
        const sql = `
        INSERT INTO descontos (valor_desconto) VALUES
        ('${valor}' );
      `
      const bd = await this.#connection.execute(sql)
      return bd[0]
    }
 
    async deleteDesconto(id) {
        const sql = `
        delete from descontos
        where id_desconto = ${id};
        `
 
        const dt = await this.#connection.execute(sql)
        return dt[0]
    }
 
     async updateDesconto(valor, id) {
        const sql = `  
            update descontos set
            valor_desconto = ${valor}
            where id_desconto = ${id}`
 
        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }

    //venda
   
    async selecionarVenda() {
        const vendaData = await this.#connection.query("select * from vendas;")
        return vendaData[0]
    }

 
    async selecionarVendaId(id) {
        const vendaData = await this.#connection.query("select * from vendas where id_venda ="+id)
        return vendaData[0]
    }
 
    async insertVenda( horavenda, diavenda, skinvenda, cupomvenda) {
        const sql = `
        INSERT INTO vendas (
            hora_venda,
            dia_venda,
            skins_id_skin,
            cupons_id_cupon
            ) VALUES
        ('${horavenda}','${diavenda}', '${skinvenda}', '${cupomvenda}' );
      `
      const bd = await this.#connection.execute(sql)
      return bd[0]
    }
 
    async deleteVenda(id) {
        const sql = `
        delete from vendas
        where id_venda = ${id};
        `
 
        const dt = await this.#connection.execute(sql)
        return dt[0]
    }
 
     async updateVenda(horavenda, diavenda, skinvenda, cupomvenda, id) {
        const sql = `  
            update vendas set
            hora_venda = '${horavenda}',
            dia_venda = '${diavenda}',
            skins_id_skin = '${skinvenda}',
            cupons_id_cupon = '${cupomvenda}'
            where id_venda = '${id}'`
 
        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }
}

module.exports = Database