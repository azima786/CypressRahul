/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//for checkbox
cy.get('#checkBoxOption1').check().should('be.checked')
        .and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        .and('have.value', 'option1')
//to check multiple checkboxes
cy.get('input[type="checkbox"]').check(['option2', 'option3'])

//static and dynamic dropdown
cy.get('select').select('option2').should('have.value', 'option2')
//cy.get('select').select('Select').should('contain', 'Select')
cy.get('#autocomplete').type('ind')
//find common element for each of them
cy.get('.ui-menu-item div').each(($el) => {

if($el.text()==="India")
{
    cy.wrap($el).click()
}

})
cy.get('#autocomplete').should('have.value', 'India')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('[value="radio2"]').check().should('be.checked')
})
})