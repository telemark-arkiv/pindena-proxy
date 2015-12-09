'use strict'

var tap = require('tap')
var fs = require('fs')
var unwrapJSON = require('../lib/unwrapJSON')
var txt = fs.readFileSync('test/data/parsed_form.txt', 'utf-8')
var json = require('./data/form.json')

tap.equal(txt, unwrapJSON(json), 'Unwrapped equals text')
