class HomePage {

    getEditBox() {
        return cy.get("input[name='name']:nth-child(2)")

    }
    getTwowaydatabinding() {
        return cy.get(':nth-child(4) > .ng-pristine')

    }
    getGender() {
        return cy.get('select')
    }
    getntrepreneur() {
        return cy.get('#inlineRadio3')

    }
    getshoptab() {
        return cy.get(':nth-child(2) > .nav-link')
    }



}
export default HomePage;