const express = require('express')
const app = express()
const SEVER_PORT = 3001
const ctrl = require('./controller/messages_controller')
const url = '/api/messages'


app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get(url, ctrl.read)

app.post(url,ctrl.create)

app.put(`${url}/:id`, ctrl.update)

app.delete(`${url}/:id`, ctrl.delete)


app.listen(SEVER_PORT, () => console.log(`Kittens fighting on ${SEVER_PORT}`))