const app = require('express')()

app.get('/', (req, res) => {
  res.send('Hi !')
})

app.get('/html', (req, res) => {
  res.send(`
  <div>
    <h1>TEST H1</h1>
    <p>paragraph test</p>
  </div>
  `)
})

const PORT = process.env.PORT || 3000

app.listen(PORT)
