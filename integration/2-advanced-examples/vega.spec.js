/// <reference types = "cypress" />

it('should land on homepage and click on Inventory Button', () =>{
	cy.visit('https://vega-dev-web.azurewebsites.net/landing')
	cy.click('email-2').type('pelex34467@upsdom.com')
	cy.click('password').type('!Testuser001')
	cy.contains('login').click
})