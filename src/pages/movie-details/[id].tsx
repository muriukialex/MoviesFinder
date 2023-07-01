import Head from 'next/head'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import MovieDetailsPage from '@/website/MovieDetailsPage'

// types
import type { GetServerSidePropsContext } from 'next'

const MovieDetails = () => {
	return (
		<>
			<Head>
				<title>🍿</title>
				<meta
					name='description'
					content='Movies FInder application | Find your favorite movies using the Movies Finder application'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<MovieDetailsPage />
		</>
	)
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions)
	// If the user is already logged in, redirect.
	if (!session) {
		return { redirect: { destination: '/' } }
	}

	return {
		props: {
			session,
		},
	}
}

export default MovieDetails
