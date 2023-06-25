import Head from 'next/head'
import SignInPage from '@/website/SignInPage'

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

export default SignIn
