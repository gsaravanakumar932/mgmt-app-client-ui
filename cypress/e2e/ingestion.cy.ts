describe('Ingestion Management', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/ingestion');
  });

  it('should allow user to trigger ingestion', () => {
    cy.get('.document-list .document-row').first().find('.trigger-ingestion-btn').click();
    cy.get('.document-list .document-row').first().find('.ingestion-status').should('contain', 'pending');
  });

  it('should display ingestion status', () => {
    cy.get('.document-list .document-row').first().find('.ingestion-status').should('exist');
  });
});
