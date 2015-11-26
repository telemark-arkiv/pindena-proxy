'use strict'

var formidable = require('formidable')
var sendMail = require('../lib/sendMail')
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
          var form = new formidable.IncomingForm()
          form.parse(request.payload, function (err, fields, files) {
            if (err) {
              console.error(err)
            } else {
              var mailFrom = fields['data[registrationpersonstruct][1][Email]']
              sendMail({
                apiKey: config.API_KEY,
                to: config.MAIL_TO,
                from: mailFrom,
                subject: formID,
                message: JSON.stringify(fields, null, 2)
              }, function (error, msg) {
                if (error) {
                  console.log(error)
                } else {
                  mainCallback
                }
              })
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
