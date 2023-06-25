import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import AccessDenied from '../AccessDenied'
// import SignInPage from '@/website/SignInPage'
import SignIn from '@/pages/auth/signin'

interface ProtectedProps {
	children: React.ReactNode
}

const Protected = ({ children }: ProtectedProps) => {
	const { data: session } = useSession()
	const [content, setContent] = useState<string>('')

	// Fetch content from protected route
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('/api/protected')
			const json = await res.json()
			if (json.content as string) {
				console.log('json.content: ', json.content)
				setContent(json.content)
			} else {
				console.error(json.error)
			}
		}
		fetchData()
	}, [session])

	// If no session exists, show the sign in page
	if (!session) {
		return (
			/* <AccessDenied /> */
			<SignIn />
		)
	}

	// If session exists, display content
	return (
		<>
			<h1>Protected Page</h1>
			<p>
				<strong>{content ?? '\u00a0'}</strong>
			</p>
			{children}
		</>
	)
}

export default Protected
