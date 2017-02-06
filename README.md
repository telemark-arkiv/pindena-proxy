[![Build Status](https://travis-ci.org/telemark/pindena-proxy.svg?branch=master)](https://travis-ci.org/telemark/pindena-proxy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# pindena-proxy

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/pindena-proxy.svg)](https://greenkeeper.io/)
Intercepts registrations to Pindena

## Prerequisites

## Installation

## Usage

## Docker
The solution i ready for deployment by Docker.

Setup your environment variables in the [Dockerfile](Dockerfile).

```
# Env variables
ENV SERVER_PORT 8000
ENV PINDENA_URL https://telemark.pameldingssystem.no
ENV PINDENA_HOST: telemark.pameldingssystem.no
ENV PINDENA_PROTOCOL https
ENV PINDENA_PORT 443
ENV API_KEY yourSendGridAPIKey
ENV MAIL_TO mailTo@example.com
```

Build the image

```
$ docker build -t pindena-proxy .
```

Start a container

```
$ docker run -d -p 80:8000 --name pindena pindena-proxy
```
