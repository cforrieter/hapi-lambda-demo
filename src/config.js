const Confidence = require('confidence')
const Pack = require('../package')

// This is in a single file but as this file grows it would make sense to split it up into a
// config directory with a file for each environment
const config = {
  $filter: 'env',
  $base: {
    debug: true,
    publishSwaggerApi: true,
    swagger: {
      info: {
        title: 'Open API Documentation',
        version: Pack.version,
      },
    },
    /**
     * Configure the logging
     * https://github.com/hapijs/good/blob/master/API.md
     * https://github.com/hapijs/good-squeeze
     */
    logging: {
      ops: {
        interval: 30000,
      },
      includes: {
        request: ['headers', 'payload'],
        response: ['payload'],
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [
              {
                error: '*',
                log: '*',
                response: '*',
                request: '*',
              },
            ],
          },
          {
            module: 'good-console',
            args: [{ format: 'YYYY-MM-DD HH:mm:ss,SSS', color: false }],
          },
          'stdout',
        ],
      },
    },
  },
  dev: {
    debug: true,
  },
  test: {
    debug: false,
  },
  stage: {
    debug: false,
  },
  prod: {
    debug: false,
    publishSwaggerApi: false,

    // disable debug logging in prod (good-squeeze)
    logger: {
      request: {
        include: '*',
        exclude: 'debug',
      },
    },
  },
}

const store = new Confidence.Store(config)
module.exports = store.get('/', { env: process.env.NODE_ENV || 'dev' })
