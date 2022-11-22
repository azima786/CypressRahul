/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

//make it using JQuery element
//cy.get('div.mouse-hover-content').invoke('show')

//withoutif element is invisible
cy.contains('Top').click({force:true})
cy.url().should('include', 'top')


})
})
