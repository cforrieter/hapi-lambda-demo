const glue = require('glue')
const HapiSwagger = require('hapi-swagger')
const inert = require('inert')
const vision = require('vision')
const good = require('good')

const config = require('./config')
const api = require('./api') // REST API
exports.manifest = {
  server: {
    port: process.env.port || 3000,
    routes: { cors: true },
  },
  register: {
    plugins: [
      vision,
      inert,
      // monitor,
      api,
      { plugin: HapiSwagger, options: config.swagger },
      { plugin: good, options: config.logging },
    ],
  },
}

const serverOptions = {
  relativeTo: __dirname,
}

exports.handler = async (event, context, callback) => {
  const server = await glue.compose(exports.manifest, serverOptions)

  const options = {
    method: event.httpMethod,
    url: event.path,
    payload: event.body,
    headers: event.headers,
    validate: false,
  }

  const response = await server.inject(options)
  return {
    statusCode: response.statusCode,
    body: JSON.stringify(response.result),
  }
}
