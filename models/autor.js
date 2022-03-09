const db = require("../db")

class Autor {
  static async inserir(data){
    const connect = await db.conncet();
    const sql = "insert into autores( nome, sobrenome, data_de_nascimento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_de_nascimento]
    return await connect.query(sql, values);
  }
  
  static async selecionar(){
    const connect = await db.conncet();
    return await connect.query("select * from autores");
  }
  
  static atualizar(){
   const connect = await db.conncet();
    return await connect.query(""); 
  }
  
  static deletar(){
   const connect = await db.conncet();
    return await connect.query("");
  }
  
}

module.exports = Autor;