# Hapi.js Lambda Demo

A demo of running Hapi.js on AWS Lambda.

This application uses Hapi as the foundation, and is deployed to AWS Lambda and API gateway.
We use the [Serverless](https://serverless.com) framework to provision and deploy the stack to AWS, as well as run it locally for debugging purposes.

## Getting Started

Run `yarn install` from a shell or bash based window, then execute any of the following commands.

To execute deployments, you must have configured your default AWS profile with an account that has access to Lambda, API Gateway, and Cloudformation.

To edit any of the parameters involved in deploying to AWS, check out the `serverless.yml` file.

## Development server

Run `yarn start for a dev server. View the swagger file at `http://localhost:3000/swagger.json`.

## Debugging server

Run `yarn debug` for a debuggable instance. Setting the `NODE_ENV` variable to whatever environment you are running in will load the correct config. `dev, qa, stage, prod`

## Running unit tests

Run `yarn test` to execute the unit tests via [Jasmine](https://jasmine.github.io/). To get detailed debugging output, run the tests with `DEBUG=true npm test`.

## API Documentation

API documentation is provided by Swagger and can be accessed at http://localhost:3000/swagger.json.

# TODO

* Update tests
* Replace jasmine with jest

