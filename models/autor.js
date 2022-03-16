const db = require("../db")

class Autor {
  static async inserir(data){
    const connect = await db.connect();
    const sql = "INSERT INTO autores( nome, sobrenome, data_de_nascimento) VALUES ($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_de_nascimento]
    return await connect.query(sql, values);
  }
  
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * FROM autores");
  }
  
  static async atualizar(data, id){
   const connect = await db.connect();
   const sql = "UPDATE autores SET nome=$1, sobrenome=$2, data_de_nascimento=$3 WHERE id=$4"
   const values = [data.nome, data.sobrenome, data.data_de_nascimento, id]
   return await connect.query(sql, values); 
  }
  
  static async deletar(data, id){
   const connect = await db.connect();
    const sql = "DELETE FROM autores WHERE id=$1"
    return await connect.query(sql, id);
  }
}

module.exports = Autor;