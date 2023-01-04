const express = require('express')
const app = express()
const port = process.env.port || 5000
const dbconnection = require('./db')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node Js Server Started in port ${port}`))