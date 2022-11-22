/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('.table-display tr td:nth-child(2)').each(($el, index) => {
const text=$el.text()
if(text.includes("Python")){
        //traverse to sibling using next. 
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
       price= price.text()
       expect(price).to.equal('25')
    }
    )}

})
})
})