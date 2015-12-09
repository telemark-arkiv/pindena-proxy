'use strict'

function unsluggifySubject (subject) {
  return subject.split('-').join(' ')
}

module.exports = unsluggifySubject
