import Head from 'next/head'
import SignInPage from '@/website/SignInPage'

const SignIn = () => {
	return (
		<>
			<Head>
				<title>Sign In | Find your favorite movies</title>
				<meta name='description' content='Sign In | Find your favorite movies using the Movies Finder application' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SignInPage />
		</>
	)
}

export default SignIn
