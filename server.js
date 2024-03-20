const express = require('express');
const { autoMateScript } = require('./puppeteer');
const path = require('path')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.post('/fillStatus', async (req, res) => {
    const data = await autoMateScript(req.body)
    if(data.error){
        res.send('Error: ' + data.error)
    }else{
        res.send(data.img)
    }
})

app.listen(3000, () => {
    console.log('server run at http://localhost:3000')
})