// importando o express atraves do 'require' para o nosso projeto
import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.use(routes)


export default app
