import { consulta } from "../database/conexao.js";

class SelecaoRepository
{
  
  findAll() 
  {
    const sql = "SELECT * FROM selecoes;";
    return consulta(sql, 'Nao foi possivel retornar a(s) seleção(ões).')
  }

  findById(id)
  {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return consulta(sql, id, `Seleção com o ${id} não encontrada.`)
  }

  create(selecao)
  {
    const sql = "INSERT INTO selecoes SET ?;";
    return consulta(sql, selecao, 'Nao foi possivel cadatsrar a Seleção.')
  }

  update(selecao, id)
  {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return consulta(sql, [selecao, id], 'Não foi possível atualizar os dados da Seleção.')
  }

  delete(id)
  {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return consulta(sql, id, `Não foi possível excluir a Seleção com o ${id}.`)
  }

}

export default new SelecaoRepository()

