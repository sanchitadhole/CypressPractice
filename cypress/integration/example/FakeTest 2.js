describe('my first test suite', () => {
    it('My first test case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Malholtra"
            req.continue((res) => {
                // expect(res.statusCode).to.eql(403)
            })
        }).as('dummyUrl')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')

    })
})