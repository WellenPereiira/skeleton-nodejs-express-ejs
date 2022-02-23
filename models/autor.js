const db = require("../db")

class Autor {
  static inserir(){
    const connect = await db.conncet();
    return await connect.query("");
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