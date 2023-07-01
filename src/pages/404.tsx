import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import NotFoundPage from '@/website/NotFoundPage'
import ErrorResponse from '@/components/ErrorResponse'

const NotFound = () => {
	const { data: session } = useSession()
	if (!session) {
		return (
			<>
				<ErrorResponse message='Oops! Something went wrong' />
				<div style={{ textAlign: 'center' }}>
					<Link href='/'>Go home</Link>
				</div>
			</>
		)
	}
	return (
		<>
			<Head>
				<title>Movies Finder 🎬</title>
				<meta name='description' content='Find your favorite movies using the Movies Finder application' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NotFoundPage />
		</>
	)
}

export default NotFound
