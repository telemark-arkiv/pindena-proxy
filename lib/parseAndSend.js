'use strict'

var formidable = require('formidable')
var sendMail = require('./sendMail')
var config = require('../config')
var unwrapJSON = require('./unwrapJSON')
var unsluggifySubject = require('./unsluggifySubject')

function parseAndSend (request, callback) {
  if (!request) {
    return callback(new Error('Missing required input: request'), null)
  }
  var formID = request.params.formID
  var form = new formidable.IncomingForm()
  form.parse(request.payload, function (error, fields, files) {
    if (error) {
      return callback(error, null)
    } else {
      var mailFrom = fields['data[registrationpersonstruct][1][Email]']
      sendMail({
        apiKey: config.API_KEY,
        to: config.MAIL_TO,
        from: mailFrom,
        subject: unsluggifySubject(formID),
        message: unwrapJSON(fields)
      }, function (err, msg) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, msg)
        }
      })
    }
  })
}

module.exports = parseAndSend
