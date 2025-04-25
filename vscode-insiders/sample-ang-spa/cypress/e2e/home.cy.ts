/// <reference types="cypress" />

describe('Home Page Review Submission', () => {
  beforeEach(() => {
    // Navigate to the home page before each test
    cy.visit('http://localhost:4200/');
  });

  it('should display welcome message and current date and time', () => {
    // Verify welcome message
    cy.contains('Welcome to the website').should('be.visible');

    // Verify current date and time
    const currentDate = new Date().toLocaleString(); // Use JS current date
    cy.contains(currentDate).should('be.visible');
  });

  it('should display review text box and submit button', () => {
    // Verify review text box is visible
    cy.get('textarea[placeholder="Enter your review"]').should('be.visible');

    // Verify submit button is visible
    cy.get('button[type="submit"]').contains('Submit').should('be.visible');
  });

  it('should record review and show success message on submission', () => {
    // Enter review in the text box
    const reviewText = 'This is a sample review.';
    cy.get('textarea[placeholder="Enter your review"]').type(reviewText);

    // Click the submit button
    cy.get('button[type="submit"]').contains('Submit').click();

    // Verify success message is displayed
    cy.contains('Your review has been submitted successfully!').should('be.visible');
  });
});
