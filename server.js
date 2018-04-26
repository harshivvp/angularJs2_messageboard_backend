const express = require('express')
const app = express()

const messages = [{text:"Hello kid!", owner:"Kunal"},{text:"lol!", owner:"Nilesh"}]

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res) => res.json(messages))

app.listen(3000, () => console.log('Example app listening on port 3000!'))