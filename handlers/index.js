'use strict'

var Wreck = require('wreck')
var config = require('../config')
var sendMail = require('../lib/sendMail')
var wreckOptions = {}

function postForm (request, reply) {
  var formID = request.params.formID
  var payloadToSend = request.payload
  var data = payloadToSend.data
  var mailFrom = payloadToSend.data.registrationpersonstruct[0].Email
  var postUrl = config.PINDENA_URL + '/' + formID

  sendMail({
    apiKey: config.API_KEY,
    to: config.MAIL_TO,
    from: mailFrom,
    subject: 'I win!!!!!',
    message: JSON.stringify(data, null, 2)
  }, function (error, msg) {
    if (error) {
      reply(error)
    } else {
      Wreck.post(postUrl, wreckOptions, function (error, res, payload) {
        if (error) {
          reply(error)
        } else {
          reply(payload.toString())
        }
      })
    }
  })
}

module.exports.postForm = postForm
