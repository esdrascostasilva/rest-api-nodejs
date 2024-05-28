import conexao from "../database/conexao.js"

conexao.connect()

class SelecaoController
{
    index(request, response)
    {
        const SQL = "SELECT * FROM selecoes;"
        conexao.query(SQL, (erro, result) => 
        {
          if(erro)
            response.status(404).json({ 'erro': erro })
          else
            response.status(200).json(result)
        })
    }

    show(request, response)
    {
        const id = request.params.id;
        const SQL = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(SQL, id, (erro, result) => 
        {
          const linha = result[0]
          if(erro)
            response.status(404).json({ 'erro': erro })
          else
            response.status(200).json(linha)
        })
    }

    store(request, response) 
    {
        const selecao = request.body
        const SQL = "INSERT INTO selecoes SET ?;"
        conexao.query(SQL, selecao, (erro, result) => 
        {
          if(erro)
            response.status(404).json({ 'erro': erro })
          else
            response.status(201).json(result)
        })
    }

    update(request, response) 
    {
        const id = request.params.id;
        const selecao = request.body
        const SQL = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(SQL, [selecao, id], (erro, result) => 
        {
          if(erro)
            response.status(404).json({ 'erro': erro })
          else
            response.status(200).json(result)
        })
    }

    delete(request, response) 
    {
        const id = request.params.id;
        const selecao = request.body
        const SQL = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(SQL, [selecao, id], (erro, result) => 
        {
          if(erro)
            response.status(404).json({ 'erro': erro })
          else
            response.status(200).json(result)
        })
    }
}

// padrao Singleton
export default new SelecaoController()