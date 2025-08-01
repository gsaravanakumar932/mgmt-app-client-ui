describe('User Management', () => {
  beforeEach(() => {
    cy.loginAsAdmin(); // Custom command to login as admin
    cy.visit('/admin/users');
  });

  it('should display a list of users', () => {
    cy.get('.user-list').should('exist');
  });

  it('should allow admin to change user role', () => {
    cy.get('.user-list .user-row').first().find('.role-select').select('admin');
    cy.get('.user-list .user-row').first().find('.save-role-btn').click();
    cy.get('.user-list .user-row').first().find('.role-select').should('have.value', 'admin');
  });

  it('should allow admin to delete a user', () => {
    cy.get('.user-list .user-row').last().find('.delete-user-btn').click();
    cy.get('.user-list .user-row').should('have.length.greaterThan', 0);
  });
});
