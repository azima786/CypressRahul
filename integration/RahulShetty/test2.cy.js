/// <reference types="Cypress" />

const { startCase } = require("cypress/types/lodash");

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
//cy.wait(800000)
//fixture
cy.get('.search-keyword').type('ca')
cy.wait(3000)

cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews')){
cy.wrap($el).find('button').click()
}
}

)

cy.get ('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
cy.get('select').select('Unites States')

}


)
})
