const express = require('express')
const app = express()
const port = porcess.env.port || 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node Js Server Started in port ${port}`))