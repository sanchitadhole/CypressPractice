describe('describe child windows with cypress', () => {
    it('test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        cy.get('#opentab').click()
            // cy.get('#opentab').then(function(el) {
            //     const url = el.prop('href')
            //     cy.log(url)
            //     cy.visit(url)

        // })
    })
})