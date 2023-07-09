/// <reference types="cypress" />
import { expectedExpirationDate } from './utils'

Cypress.Commands.add('loginByGoogleApi', () => {
	cy.log('Logging in to Google')
	cy.request({
		method: 'POST',
		url: 'https://www.googleapis.com/oauth2/v4/token',
		body: {
			grant_type: 'refresh_token',
			client_id: Cypress.env('googleClientId'),
			client_secret: Cypress.env('googleClientSecret'),
			refresh_token: Cypress.env('googleRefreshToken'),
		},
	}).then(({ body }) => {
		const { access_token, id_token } = body
		cy.setCookie('next-auth.session-token', id_token)

		cy.request({
			method: 'POST',
			url: 'https://www.googleapis.com/oauth2/v3/userinfo',
			headers: {
				Authorization: 'Bearer ' + access_token,
			},
		}).then(({ body }) => {
			const session = {
				user: {
					name: body.name,
					email: body.email,
					image: body.picture,
				},
				expires: expectedExpirationDate(),
			}
			cy.log('session: ', session)
			cy.setServerSession(session)
		})
	})
})

Cypress.Commands.add('setServerSession', session => {
	cy.intercept('GET', '**/api/auth/session', {
		body: session,
	})
})
