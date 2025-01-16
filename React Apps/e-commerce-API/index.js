const fakedb = require('./data.js')
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

mongoose.connect('mongodb+srv://huseynvibp109:huseynvibp109@cluster0.pwcxj.mongodb.net/')
    .then(() => console.log("Data Base connected"))
    .catch(err => console.log(err))

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    image: String
})

const productModel = mongoose.model('product', productSchema)

app.get('/products', async (req, res) => {
    const data = await productModel.find()
    res.send(data)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const data = await productModel.findById(id)
    res.send(data)
})

app.post('/products', async (req, res) => {
    const post = await productModel(req.body)
    post.save()
    res.send("post res")
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const data = await productModel.findByIdAndUpdate(id, req.body)
    res.send(data)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const data = await productModel.findByIdAndDelete(id)
    res.send(data)
})

app.listen(port, () => {
    console.log('Server work on port: 3000')
})
