'use strict'

var handlers = require('../handlers')

var routes = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: handlers.getFrontpage,
            description: 'Show the frontpage'
        }
    },
    {
        method: 'GET',
        path: '/{formID}',
        config: {
            handler: handlers.getForm,
            description: 'Show the form'
        }
    }
]

module.exports = routes
