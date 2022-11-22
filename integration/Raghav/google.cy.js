/// <reference types = "cypress" />

describe('Yahoo', () => {
  it('Google Search', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf', { timeout: 5000 }).type('Automation Step by Step{Enter}')
    // cy.contains('google').click
    // cy.wait(2000)
    cy.contains('videos').click()
  })
})
