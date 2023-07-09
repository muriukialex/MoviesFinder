export const expectedExpirationDate = () => {
	const expirationDate = new Date()
	expirationDate.setTime(expirationDate.getTime() + 30 * 24 * 60 * 60 * 1000)
	const expires = expirationDate.toISOString()
	return expires
}
