const EmployeeService = require('../employee.service')
const request = { log: () => { } }
const service = new EmployeeService(request)
describe('employee service', function () {
    it('should return profile information', function () {
        const profile = service.getProfile(1)
        expect(profile).not.toBeNull()
    })
})
