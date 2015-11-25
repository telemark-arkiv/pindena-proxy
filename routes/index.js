'use strict'

var handlers = require('../handlers')
var config = require('../config')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/{formID}',
    config: {
      handler: handlers.getForm,
      description: 'Show the form'
    }
  },
  {
    method: 'POST',
    path: '/{formID}',
    config: {
      handler: handlers.postForm,
      description: 'Post the form'
    }
  },
  {
    method: 'GET',
    path: '/lib/{params*}',
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
    method: 'GET',
    path: '/custom/{params*}',
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
    method: 'GET',
    path: '/internett1/{params*}',
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
    method: 'GET',
    path: '/auto/{params*}',
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
    method: 'GET',
    path: '/img/{params*}',
    handler: {
      proxy: {
        host: config.PINDENA_HOST,
        port: config.PINDENA_PORT,
        protocol: config.PINDENA_PROTOCOL,
        passThrough: true,
        xforward: false
      }
    }
  }
]

module.exports = routes
