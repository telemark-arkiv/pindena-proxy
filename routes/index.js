'use strict'

var handlers = require('../handlers')
var config = require('../config')

var routes = [
  {
    method: 'GET',
    path: '/{params*}',
    handler: {
      proxy: {
        host: config.PINDENA_HOST,
        port: config.PINDENA_PORT,
        protocol: config.PINDENA_PROTOCOL,
        passThrough: true,
        xforward: false
      }
    }
  },
  {
    method: 'POST',
    path: '/{formID}',
    config: {
      handler: handlers.postForm,
      description: 'Post the form'
    }
  }
]

module.exports = routes
