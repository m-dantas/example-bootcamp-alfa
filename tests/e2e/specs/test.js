// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit(Cypress.env('URL_DEFAULT') + '/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

describe('My Second Teste', () => {
  it('Visits the app root url', () => {
    cy.visit(Cypress.env('URL_DEFAULT') + '/')
    cy.contains('h2', 'MUDOU!')
  })
})
