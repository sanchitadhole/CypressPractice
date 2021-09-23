import HomePage from '../../support/PageObject/HomePage'
import ProductPage from '../../support/PageObject/ProductPage'
describe('test framework', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data

        })
    })


    it('test', function() {


        const homePage = new HomePage()
        const Productpage = new ProductPage()



        // cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.visit(Cypress.env('url') + "/angularpractice/")


        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwowaydatabinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getshoptab().click()



        this.data.productName.forEach(function(element) {
            cy.SelectProduct(element)
        });
        Productpage.ProductPagebutton().click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            // cy.log($el.text())
            let amount = $el.text()
            let res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
                // cy.log(res)
        }).then(function() {
            cy.log(sum)

        })
        cy.get('h3 strong').then((element) => {
            // element.text()
            let amount = element.text()
            let res = amount.split(" ")
            var Total = res[1].trim()
            expect(Number(Total)).to.eql(sum)
        })


        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type = "submit"]').click()
            // cy.get('.alert').should('have.text', ' Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element) {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })

    })
})