/// <reference types="Cypress" />

describe('to write test case of mousehover', () => {
    it('first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            // cy.get('div.mouse-hover-content ').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})