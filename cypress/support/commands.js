// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', (email, password) => { 
    cy.get('.ml-auto > .ml-2').click(); 
    cy.get('#mail').type(email); 
    cy.get('#pass').type(password); 
    cy.get('form > .ml-2').contains('Submit').click();
  });
  
  Cypress.Commands.add('visitHomePage', () => {
    cy.visit("http://localhost:3000/");
  });
  
  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })