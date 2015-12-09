'use strict'

function cleanUpKey (key) {
  var round_01 = key.replace('data[registrationpersonstruct][1]', '')
  var round_02 = round_01.replace('[', '')
  var round_03 = round_02.replace(']', '')
  return round_03
}

function unwrapJSON (data) {
  var list = []
  Object.keys(data).forEach(function (key) {
    if (key.indexOf('data') !== -1) {
      list.push(cleanUpKey(key) + ': ' + data[key])
    }
  })
  return list.join('<br>\n')
}

module.exports = unwrapJSON
