const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const testRouter = require('./controllers/test')

const app = express()

app.use(cors())
morgan.token('body', function (req) { return JSON.stringify(req.body) })
app.use(express.json())

app.use(morgan(':method :url :status :response-time ms :body'))

app.use('/api/test', testRouter)

app.use(express.static('build'))

// Tämän täytyy (ehkä) olla kaikkien routereiden jälkeen
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')))

module.exports = app