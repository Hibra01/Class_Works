const fakedb = require('./data.js')
const express = require('express')
const cors = require('cors')

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/products', (req, res) => {
    res.send(fakedb)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const element = fakedb.find((p) => p.id === +id)
    if (element) {
        res.send(element)
    } else {
        res.status(400).send("Bad request")
    }
})

app.post('/products', (req, res) => {
    fakedb.push(req.body)
    res.send("post res")
})

app.put('/products', (req, res) => {
    res.send("put res")
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    fakedb = fakedb.filter((p) => p.id !== +id)
    res.send("deleted")
})

app.listen(port, () => {
    console.log('Server work on port: 3000')
})
