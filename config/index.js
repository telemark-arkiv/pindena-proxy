'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 8000,
  PINDENA_URL: process.env.PINDENA_URL || 'https://telemark.pameldingssystem.no',
  PINDENA_HOST: process.env.PINDENA_HOST || 'telemark.pameldingssystem.no',
  PINDENA_PROTOCOL: process.env.PINDENA_PROTOCOL || 'https',
  PINDENA_PORT: process.env.PINDENA_PORT || 443,
  API_KEY: process.env.API_KEY || 'yourSendGridApiKey',
  MAIL_TO: process.env.MAIL_TO || 'mailto@example.com'
}

module.exports = config
