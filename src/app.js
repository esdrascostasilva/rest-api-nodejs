// importando o express atraves do 'require' para o nosso projeto
import express from 'express'
import conexao from './app/database/conexao.js'

// criando uma instancia de 'express'
const app = express()

// indicar para o express ler body com json
app.use(express.json())

// fazer a conexao
conexao.connect((erro) => {
  if(erro) 
  {
    console.log(erro)
  } 
  else 
  {
    console.log('Conexao realizada com sucesso')
  }
})

// ROTAS
app.get('/selecoes', (request, response) => {
  // response.send(SELECOES)
  const SQL = "SELECT * FROM selecoes;"
  conexao.query(SQL, (erro, result) => 
  {
    if(erro)
      response.status(404).json({ 'erro': erro })
    else
      response.status(200).json(result)
  })
})

app.get('/selecoes/:id', (request, response) => {
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
})

app.post('/selecoes', (request, response) => {
  const selecao = request.body
  const SQL = "INSERT INTO selecoes SET ?;"
  conexao.query(SQL, selecao, (erro, result) => 
  {
    if(erro)
      response.status(404).json({ 'erro': erro })
    else
      response.status(201).json(result)
  })
})

app.put('/selecoes/:id', (request, response) => {
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
})

app.delete('/selecoes/:id', (request, response) => {
  const id = request.params.id;
  const SQL = "DELETE FROM selecoes WHERE id=?;"
  conexao.query(SQL, id, (erro, result) => 
  {
    if(erro)
      response.status(404).json({ 'erro': erro })
    else
      response.status(200).json(result)
  })
})

export default app
