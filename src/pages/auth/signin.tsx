import Head from 'next/head'
import SignInPage from '@/website/SignInPage'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

// types
import type { GetServerSidePropsContext } from 'next'

const SignIn = () => {
	return (
		<>
			<Head>
				<title>Sign In | Movies Finder 🎬</title>
				<meta name='description' content='SignIn to view your favorite movies in the Movies Finder App' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SignInPage />
		</>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions)

	// If the user is already logged in, redirect.
	if (session) {
		return { redirect: { destination: '/' } }
	}

	return {
		props: { session: session },
	}
}

export default SignIn
