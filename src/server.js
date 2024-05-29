import app from './app.js'

// defino uma porta para roda ro meu projeto no meu localhost. 3000 é padrao
// Por padrao, nomes de const em letras maiusculas: PORT, PI, ...
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`)
})

