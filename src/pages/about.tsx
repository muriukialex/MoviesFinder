import Head from 'next/head'
import AboutPage from '@/website/AboutPage'
import Protected from '@/components/Protected'

const About = () => {
	return (
		<Protected>
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
		</Protected>
	)
}

export default About
