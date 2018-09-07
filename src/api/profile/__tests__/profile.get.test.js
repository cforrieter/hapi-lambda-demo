const glue = require('glue')

const {manifest} = require('../../../index')

const mockData = {
    '1': {id: 1, firstName: 'John', lastName: 'Smith'},
    '2': {id: 2, firstName: 'Hebba', lastName: 'Mahmoud'},
    '31': {id: 3, firstName: 'Heather', lastName: 'Erickson'}
}

describe('get profile', () => {

    it('should return a profile for the authenticated user', async () => {
        const serverOptions = {
            relativeTo: __dirname
        }
        const server = await glue.compose(manifest, serverOptions)
        const options = {
            method: 'GET',
            url: '/api/v1/profile/1'
        }
        const response = await server.inject(options)
        expect(response.statusCode).toBe(200)
    })
})
