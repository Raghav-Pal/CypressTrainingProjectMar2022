/// <reference types = "cypress"/>

it('Google Search Test', function(){

   
    cy.visit(Cypress.config().baseUrl);
    cy.wait(2000)
    cy.log(Cypress.config().myname);
    cy.screenshot()
    cy.get('.gLFyf', {timeout:3000}).type(Cypress.config().myname+'{enter}');
    cy.contains('Videos').click();

})