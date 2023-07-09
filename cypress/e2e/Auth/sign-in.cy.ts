describe('Google OAuth Sign In', () => {
	beforeEach(() => {
		cy.loginByGoogleApi()
	})
	it('should successfully login using the Github Provider', () => {
		cy.visit('/auth/signin')

		cy.get('[data-cy="google-sign-in-btn"]').should('exist')
		cy.get('[data-cy="google-sign-in-btn"]').click()
	})
})
