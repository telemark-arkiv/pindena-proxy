'use strict'

var Hapi = require('hapi')
var Hoek = require('hoek')
var server = new Hapi.Server()
var config = require('./config')
var pindenaService = require('./index')

server.connection({
    port: config.SERVER_PORT
})

server.register(require('inert'), function (err) {
    if (err) {
        throw err
    }
    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    })
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
