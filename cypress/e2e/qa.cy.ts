describe('Q&A Interface', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/qa');
  });

  it('should allow user to ask a question and receive an answer', () => {
    cy.get('input[name="question"]').type('What is RAG?');
    cy.get('button[type="submit"]').click();
    cy.get('.qa-answer').should('exist');
  });

  it('should display relevant document excerpts', () => {
    cy.get('.qa-sources').should('exist');
  });
});
