before(function () {
  cy.fixture('example.json').as('test_data')
})

it('Read Files using fixture', function () {
  cy.fixture('example.json').then((data) => {
    cy.log(data.name)
    cy.log(data.email)
  })

  cy.log(this.test_data.name)
})

it('Read file using readfile function', function () {
  cy.readFile('./cypress/fixtures/example.json').then((data) => {
    cy.log(data.name)
  })
})

it('Write File Demo', function () {
  cy.writeFile('sample.txt', 'Hello I am Azima and I am learning Cypress\n')
  cy.writeFile('sample.txt', 'I am new', { flag: 'a+' })
})
