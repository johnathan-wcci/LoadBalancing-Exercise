const express = require('express')
const app = express()
const port = 5050

app.get('/', (req, res) => {
    res.send({
        server: process.env.SERVER
    })
})

app.listen(port, () => {
    console.log(`Backend is listening on port ${port}`)
})