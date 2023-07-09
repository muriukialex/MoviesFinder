declare namespace Cypress {
	interface Chainable<Subject = any> {
		loginByGoogleApi(): Chainable<void>
		setServerSession(session: any): Chainable<void>
	}
}
