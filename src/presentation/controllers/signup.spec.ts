import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 200 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpsResponse = sut.handle(httpRequest)
    expect(httpsResponse.statusCode).toBe(400)
  })
})
