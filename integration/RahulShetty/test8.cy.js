/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded('#courses-iframe')
cy.iframe().find('a[href="mentorship"]').eq(0).click()
cy.iframe().find('a[href="mentorship"]').should('have.length', '2')
})


})
