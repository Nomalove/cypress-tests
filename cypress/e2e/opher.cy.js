describe('Opher.io Website Tests', () => {
  
  it('Loads the homepage', () => {
    cy.visit('https://opher.io')        // Open the website
    cy.title().should('include', 'Opher') // Check that the page title has "Opher"
  })

  it('Opens the Marketplace page', () => {
    cy.visit('https://opher.io')
    cy.contains('Marketplace').click()   // Click on the Marketplace link
    cy.url().should('include', 'marketplace') // Verify URL contains marketplace
  })

  it('Checks that Login button is visible', () => {
    cy.visit('https://opher.io')
    cy.contains('Login').should('be.visible') // Confirm Login button exists
  })

})
