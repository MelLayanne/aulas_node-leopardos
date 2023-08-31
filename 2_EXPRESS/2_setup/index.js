//importar express
const express = require('express')
const app = express()

//get e post- verbos http - link faz requisição
//diferença get = só inquisição, post =  quando quer enviar algo
app.get('/', (requisicao, resposta) => {
    resposta.send('Estou utilizando o Express!')
})