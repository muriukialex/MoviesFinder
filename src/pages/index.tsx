import Head from 'next/head'
import styles from '@/styles/Home.module.sass'
import Protected from '@/components/Protected'

const Home = () => {
	return (
		<Protected>
			<Head>
				<title>Movies Finder 🎬</title>
				<meta name='description' content='Find your favorite movies using the Movies Finder application' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.HomePageContainer}>
				<h1>This is the home page</h1>
				<div className={styles.description}>This are the main page desription statements</div>
			</main>
		</Protected>
	)
}

export default Home
