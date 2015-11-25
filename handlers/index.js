'use strict'

var Wreck = require('wreck')
var config = require('../config')
var wreckOptions = {}

function getFrontpage (request, reply) {
    reply('Nothing to see here. Go home.')
}


function getForm (request, reply) {
    var formID = request.params.formID
    Wreck.get(config.API_URL + '/' + formID, wreckOptions, function (error, res, payload) {
        if (error) {
            reply(error)
        } else {
            reply(payload)
        }
    })
}

module.exports.getFrontpage = getFrontpage

module.exports.getForm = getForm
