/// <reference types="cypress" />

describe('My first test suite', () => {
    it('First test', () => {
        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layout').click()
    })
})