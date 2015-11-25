'use strict'

var Wreck = require('wreck')
var config = require('../config')
var wreckOptions = {}

function getFrontpage (request, reply) {
  reply('Nothing to see here. Go home.')
}

function getForm (request, reply) {
  var formID = request.params.formID
  Wreck.get(config.PINDENA_URL + '/' + formID, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      reply(payload.toString())
    }
  })
}

function postForm (request, reply) {
  // var formID = request.params.formID
  var payload = request.payload
  var data = payload.data
  // var mailFrom = payload.data.registrationpersonstruct[0].Email




  reply(JSON.stringify(data, null, 2))
}

module.exports.getFrontpage = getFrontpage

module.exports.getForm = getForm

module.exports.postForm = postForm
