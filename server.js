const express = require('express');
const { autoMateScript } = require('./puppeteer');
const path = require('path')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.post('/fillStatus', (req, res) => {
    autoMateScript(req.body)
    res.send('status update sucessfuly')
})

app.listen(3000, () => {
    console.log('server run at http://localhost:3000')
})