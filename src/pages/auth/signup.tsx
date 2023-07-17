import Head from 'next/head'
import SignUpPage from '@/website/Authentication/SignUpPage'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// types
import type { GetServerSidePropsContext } from 'next'

const SignUp = () => {
	return (
		<>
			<Head>
				<title>Sign Up | Movies Finder 🎬</title>
				<meta name='description' content='SignUp to view your favorite movies in the Movies Finder App' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SignUpPage />
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

export default SignUp
