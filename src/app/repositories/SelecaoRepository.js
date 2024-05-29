import conexao from "../database/conexao.js";

conexao.connect();

class SelecaoRepository
{
  
  findAll() 
  {
    const sql = "SELECT * FROM selecoes;";

    return new Promise((resolve, reject) => 
    {
      conexao.query(sql, (erro, result) => 
      {
        if (erro) return reject("nao foi possi...");

        const teste = JSON.parse(JSON.stringify(result));

        return resolve(teste);
      });
    });
  }

  findById(id)
  {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) =>
    {
      conexao.query(sql, id, (erro, resultado) =>
      {
        if(erro) return reject('Id nao encontrado')
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  create(selecao)
  {
    const sql = "INSERT INTO selecoes SET ?;";
    return new Promise((resolve, reject) =>
    {
      conexao.query(sql, selecao, (erro, resultado) =>
      {
        if(erro) return reject('Nao foi possivel criar a selecao')
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  update(selecao, id)
  {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return new Promise((resolve, reject) =>
    {
      conexao.query(sql, [selecao, id], (erro, resultado) =>
      {
        if(erro) return reject('INao foi possivel atualizar os dados')
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

  delete(id)
  {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) =>
    {
      conexao.query(sql, id, (erro, resultado) =>
      {
        if(erro) return reject('Nao foi possivel deletar o objeto')
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
  }

}

export default new SelecaoRepository()

