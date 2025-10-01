describe('Opher Login Test', () => {

  it('Allows a user to successfully sign in', () => {
    // 1. Visit the sign-in page
    cy.visit('https://opher.io/sign-in')

    // 2. Type the email using the 'name="email"' selector
    cy.get('input[name="email"]').type('YOUR_VALID_EMAIL_HERE')

    // 3. Type the password using the 'name="password"' selector
    cy.get('input[name="password"]').type('YOUR_CORRECT_PASSWORD_HERE')

    // 4. Click the 'Sign In' button using the text content
    cy.contains('Sign In').click()

    // 5. VERIFY SUCCESS: Check for an element or URL that indicates a successful login.
    // Assuming a successful login redirects to the main 'Opher' app URL
    // You might need to adjust '/home' to whatever the final URL is after login.
    cy.url().should('include', '/home') 

    // Optional: Check for an element that only appears when logged in
    cy.contains('Your Projects Await').should('be.visible')
  })

})