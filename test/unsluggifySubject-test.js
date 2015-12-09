'use strict'

var tap = require('tap')
var unsluggifySubject = require('../lib/unsluggifySubject')
var msgOriginal = 'soknad om driftstilskudd 2016 sak 15 15647'
var msgSlugged = 'soknad-om-driftstilskudd-2016-sak-15-15647'
var msgUnslugged = unsluggifySubject(msgSlugged)

tap.equal(msgUnslugged, msgOriginal, 'Unsluggified equals original')
