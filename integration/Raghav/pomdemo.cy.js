import { LoginPage } from './Pages/login_page'

const loginPage = new LoginPage()

beforeEach(function () {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('Login Functionality', function () {
  it('Valid Login', function () {
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
  })

  it('Invalid UserName', function () {
    loginPage.enterUserName('admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
  })
})

it('Invalid Password', function () {
  loginPage.enterUserName('Admin')
  loginPage.enterPassword('Admin123')
  loginPage.clickLogin()
})
