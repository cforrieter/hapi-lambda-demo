/**
 * Provides access to core employee operations
 */
class EmployeeService {
  /**
   * Creates a new instance of EmployeeService
   * @param request The hapi request object
   */
  constructor(request) {
    this.request = request
    this.mockData = {
      '1': { id: 1, firstName: 'John', lastName: 'Smith' },
      '2': { id: 2, firstName: 'Henry', lastName: 'Samsom' },
      '3': { id: 3, firstName: 'Heather', lastName: 'Erickson' },
    }
  }

  /**
   * Returns employee profile information
   * @param id number The employee id
   * @returns An object with profile information
   */
  getProfile(id) {
    this.request.log('info', `Getting the profile for employee id ${id}`)
    return this.mockData[id]
  }

  /**
   * Returns employee profile information
   * @param id number The employee id
   * @returns An object with profile information
   */
  createProfile(profile) {
    console.log(profile)
    this.request.log(
      'info',
      `CreatingGetting the profile for employee id ${profile.id}`
    )
    this.mockData[profile.id] = profile
    return this.mockData[profile.id]
  }
}

module.exports = EmployeeService
