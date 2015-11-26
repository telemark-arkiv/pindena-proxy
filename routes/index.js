'use strict'

var parseAndSend = require('../lib/parseAndSend')
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
    handler: {
      proxy: {
        mapUri: function (request, callback) {
          var formID = request.params.formID
          var postUrl = config.PINDENA_URL + '/' + formID
          var mainCallback = callback(null, postUrl)
          parseAndSend(request, function (error, msg) {
            if (error) {
              console.error(error)
            } else {
              console.log(msg)
              mainCallback
            }
          })
        },
        passThrough: true,
        xforward: false
      }
    }
  }
]

module.exports = routes
