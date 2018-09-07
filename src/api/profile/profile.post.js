const Boom = require('boom')
const Joi = require('joi')

const Services = require('../../services')

const handler = async function(request, h) {
  const service = new Services.EmployeeService(request)

  const profile = service.createProfile(request.payload)
  if (profile) {
    return profile
  }

  return Boom.notFound()
}

module.exports = {
  // Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.
  // Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method
  method: 'POST',
  path: '/api/v1/profile',
  handler,
  config: {
    description: 'Returns the profile of the user.',
    notes: 'Returns profile information for the authenticated user.',
    tags: ['api', 'profile'],
    auth: false,
    // pre: see docs https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre
    validate: {
      payload: Joi.object({
        id: Joi.number().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
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
