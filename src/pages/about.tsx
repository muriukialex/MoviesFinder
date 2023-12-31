import Head from 'next/head'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import AboutPage from '@/website/AboutPage'

// types
import type { GetServerSidePropsContext } from 'next'

const About = () => {
	return (
		<>
			<Head>
				<title>About | Movies Finder 🎬</title>
				<meta
					name='description'
					content='About the Movies FInder application | Find your favorite movies using the Movies Finder application'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AboutPage />
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

export default About
