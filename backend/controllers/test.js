const testRouter = require('express').Router()

testRouter.get('/', (req, res) => {
    res.send('<p>Api kutsu</p>')
})

module.exports = testRouter