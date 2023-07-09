import Head from 'next/head'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import styles from '@/styles/Home.module.sass'
import HomePage from '@/website/HomePage'

// types
import type { GetServerSidePropsContext } from 'next'

const Home = () => {
	return (
		<>
			<Head>
				<title>Movies Finder 🎬</title>
				<meta name='description' content='Find your favorite movies using the Movies Finder application' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.HomePageContainer}>
				<HomePage />
			</main>
		</>
	)
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions)

	if (!session) {
		return { redirect: { destination: '/auth/signin' } }
	}
	return {
		props: {
			session: session,
		},
	}
}

export default Home
