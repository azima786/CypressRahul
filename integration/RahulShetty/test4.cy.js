/// <reference types="Cypress" />

describe('My First Test Suite', function() {
it('My First Test case', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window:alert
cy.on('window:alert', (str)=>{
        //Mocha
        expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str1)=>{
        //Mocha
        expect(str1).to.be.equal('Hello , Are you sure you want to confirm?')
})

//to open alert in same page. you need to manipulate dom using jQuery
cy.get('#opentab').invoke('removeAttr', 'target').click()
//exact or you can use include
cy.url().should('eq', 'https://www.rahulshettyacademy.com/')

//to go back or forward
cy.go('back')


})
})