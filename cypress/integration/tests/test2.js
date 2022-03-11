/// <reference types = "cypress" />

import {MyFunctions} from '../../support/myfunctions'

const myfunc = new MyFunctions

it('Demo test', () => {

    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    myfunc.hello("John");

    cy.get('#btn-make-appointment').click();

    cy.get('#txt-username').type('John Doe');

    cy.get('#txt-password').type('ThisIsNotAPassword');

    cy.get('#btn-login').click();

    cy.log('**Login is clicked**')

    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');

    // cy.get('#combo_facility').find('option:selected').find(':selected').contains('Hongkong CURA Healthcare Center')
    cy.get('#combo_facility').find('option:selected').should('have.text', 'Hongkong CURA Healthcare Center');
    
    cy.get('#combo_facility option:selected').should('have.text', 'Hongkong CURA Healthcare Center');

    cy.wait(6000)
    cy.get('#chk_hospotal_readmission').check();

    cy.get('#radio_program_medicaid').check();
    cy.wait(6000)
    cy.get('#txt_visit_date').type('07/04/2022{esc}');

    cy.get('#txt_comment').type('This is a demo comment');

    cy.get('#btn-book-appointment').click();

    cy.contains('Appointment Confirmation')
    cy.get('h2').should('have.text', 'Appointment Confirmation')

})

function hello(){
    console.log('hello world...!')
}