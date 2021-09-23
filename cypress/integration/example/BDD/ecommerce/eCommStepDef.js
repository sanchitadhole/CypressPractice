import HomePage from '../../../../support/PageObject/HomePage'
import ProductPage from '../../../../support/PageObject/ProductPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// npx cypress run --spec cypress\integration\example\BDD\ecommerce.feature --headed --browser electron
// npx cypress-tags run -e TAGS="@smoke"
// add cucumber report option in package.json ->output.json
// use html repot plugin/ create js file(passs details of your output.json)
// run js File



let name
const homePage = new HomePage()
const Productpage = new ProductPage()


Given('I open ecommerce page', function() {
    cy.visit(Cypress.env('url') + "/angularpractice/")

})

// I add item to cart
When('I add item to cart', function() {
    homePage.getshoptab().click()



    this.data.productName.forEach(function(element) {
        cy.SelectProduct(element)
    });
    Productpage.ProductPagebutton().click()

})

// And Validate the total prices
And('Validate the total prices', () => {
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
        let Total = res[1].trim()
        expect(Number(Total)).to.eql(sum)
    })


})

// Then Select the county submit and varify Thank You 
Then('Select the country submit and varify Thank You', () => {
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
    // When  I fill the Form details
When('I fill the Form details', function(dataTable) {
        // [bobz, Male]

        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])

    })
    // Then validate the form behaviour
Then('validate the form behaviour', function() {
        homePage.getTwowaydatabinding().should('have.value', name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)

    })
    // And seclect the shop page
And('seclect the shop page', function() {
    homePage.getshoptab().click()
})