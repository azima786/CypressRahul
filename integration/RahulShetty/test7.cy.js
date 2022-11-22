/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

//get attribute value
cy.get('#opentab').then(function(el){
    const url = el.prop('href')
    cy.visit(url)
})


})
})
