const Boom = require('boom')

const handler = async function(request, h) {
  return { status: 'OK' }
}

module.exports = {
  method: 'GET',
  path: '/health/check',
  handler,
  config: {
    description: 'Returns the input http request.',
    notes: 'Used for testing the health of the application.',
    tags: ['api', 'health'],
    auth: false,
  },
}
