/// <reference types="Cypress" />

/// <reference types="Cypress-iframe" />
import 'cypress-iframe'



describe('frame test', function() {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', '2')
    })


})

// describe('frames', () => {

//     it('test', () => {
//         cy.frameLoaded


//         // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//         // cy.frameLoaded('#courses-iframe')
//         // cy.iframe().find("a[href*='mentorship']").eq(0).click()
//         // cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

//     })
// })