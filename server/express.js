"use strict"

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')
const dist_path = path.resolve(__dirname, '../dist/')
server.listen(8000)

app.use(express.static('dist'))

app.get('/', function(req, res) {
  res.sendFile(dist_path + '/index.html')
})