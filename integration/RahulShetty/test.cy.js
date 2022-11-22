/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
//cy.wait(800000)
//fixture
cy.get('.search-keyword').type('ca')
cy.wait(3000)
//will show only visible items
cy.get('.product:visible').should('have.length',4)
//parent child
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length', 4)
//returns 2 index out of 4
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click
//Adding products dynamically
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews')){
cy.wrap($el).find('button').click()
}
}

)

cy.get('.brand').should('have.text', 'GREENKART')
//if you are using variable you need to handle promises by yourself
cy.get('.brand').then(function(logoElement){
//gets printed in devTools
    cy.log(logoElement.text())
})

}


)
})
