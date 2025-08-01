describe('Authentication', () => {
  it('should allow a user to sign up, login, and logout', () => {
    cy.visit('/signup');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('TestPassword123!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');

    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('TestPassword123!');
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');

    cy.get('button[aria-label="logout"]').click();
    cy.url().should('include', '/login');
  });
});
