'use strict'

var Hapi = require('hapi')
var server = new Hapi.Server()
var config = require('./config')
var pindenaService = require('./index')

server.connection({
  port: config.SERVER_PORT
})

server.register({
  register: require('h2o2')
}, function (err) {
  if (err) {
    console.log('Failed to load h2o2')
  }
})

server.register([
  {
    register: pindenaService,
    options: {}
  }
], function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err)
  }
})

function startServer () {
  server.start(function () {
    console.log('Server running at:', server.info.uri)
  })
}

function stopServer () {
  server.stop(function () {
    console.log('Server stopped')
  })
}

module.exports.start = startServer

module.exports.stop = stopServer
