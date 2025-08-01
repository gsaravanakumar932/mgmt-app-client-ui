describe('Document Management', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/documents');
  });

  it('should allow user to upload a document', () => {
    cy.get('input[type="file"]').attachFile('example.pdf');
    cy.get('button[type="submit"]').click();
    cy.get('.document-list').should('contain', 'example.pdf');
  });

  it('should display uploaded documents', () => {
    cy.get('.document-list').should('exist');
  });

  it('should allow user to delete a document', () => {
    cy.get('.document-list .document-row').last().find('.delete-document-btn').click();
    cy.get('.document-list .document-row').should('have.length.greaterThan', 0);
  });
});
