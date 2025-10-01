describe('Opher Login Test', () => {

  it('Allows a user to successfully sign in', () => {
    // 1. Visit the sign-in page
    cy.visit('https://opher.io/sign-in')

    // 2. Type the email using the 'name="email"' selector
    cy.get('#email').type('nomandladube2@gmail.com')

    // 3. Type the password using the 'name="password"' selector
    cy.get('#password').type('Nomalove@1990')

    // 4. Click the 'Sign In' button using the text content
    cy.contains('Sign In').click()

    // 5. VERIFY SUCCESS: Check for an element or URL that indicates a successful login.
    // Assuming a successful login redirects to the main 'Opher' app URL
    // You might need to adjust '/home' to whatever the final URL is after login.
    cy.url().should('include', '/dashboard/candidate') 

    // Optional: Check for an element that only appears when logged in
    cy.contains('Good morning, Nomandla Dube').should('be.visible')
    cy.contains('Profile Strength').should('be.visible')
  })

})