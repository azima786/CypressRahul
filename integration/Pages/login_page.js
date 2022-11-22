export class LoginPage {
  username_textbox =
    ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
  password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
  login = '.oxd-button'

  enterUserName(username) {
    cy.get(this.username_textbox).type(username)
  }
  enterPassword(password) {
    cy.get(this.password).type(password)
  }
  clickLogin() {
    cy.get(this.login).click()
  }
}
