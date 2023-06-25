import Link from 'next/link'
import { signIn } from 'next-auth/react'

const AccessDenied = () => {
	return (
		<>
			<h1>Access Denied | You need to be signed in to view this page</h1>
			<p>
				<Link
					href='/api/auth/signin'
					onClick={e => {
						e.preventDefault()
						signIn()
					}}>
					You must be signed in to view this page
				</Link>
			</p>
		</>
	)
}

export default AccessDenied
