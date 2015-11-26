'use strict'

var tap = require('tap')
var parseAndSend = require('../lib/parseAndSend')

tap.test('it requires a request object', function (test) {
  var request = false
  var expectedErrorMessage = 'Missing required input: request'
  parseAndSend(request, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
