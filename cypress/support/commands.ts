/// <reference types="cypress" />
// ***********************************************

Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.get('input[name="email"]').type('testuser@example.com');
  cy.get('input[name="password"]').type('TestPassword123!');
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('/login');
  cy.get('input[name="email"]').type('admin@example.com');
  cy.get('input[name="password"]').type('AdminPassword123!');
  cy.get('button[type="submit"]').click();
});

import 'cypress-file-upload';
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      loginAsAdmin(): Chainable<void>;
    }
  }
}