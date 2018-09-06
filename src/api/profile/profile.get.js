'use strict'
const Boom = require('boom')
const Joi = require('joi')

const Services = require('../services')

const handler = async function(request, h) {
  const service = new Services.EmployeeService(request)

  const profile = service.getProfile(request.params.userId)
  if (profile) {
    return profile
  }

  return Boom.notFound()
}

module.exports = {
  // Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.
  // Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method
  method: 'GET',
  path: '/api/v1/profile/{userId}',
  handler,
  config: {
    description: 'Creates a user.',
    notes: 'Creates a user',
    tags: ['api', 'profile'],
    auth: false,
    // pre: see docs https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre
    validate: {
      params: Joi.object({
        userId: Joi.number().required(),
      }).options({ allowUnknown: false }),
      // Can also add
      // headers: Joi.object({})
      // params: Joi.object({})
      // query: Joi.object({})
      // see docs https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidate
    },
    response: {
      schema: Joi.object({
        id: Joi.number(),
        firstName: Joi.string().max(50),
        lastName: Joi.string().max(50),
      }),
      // see docs https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponse
    },
  },
}
