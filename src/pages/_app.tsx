import '@/styles/globals.sass'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/Layout'

// types
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
// We are using the <SessionProvider> to enable use of the useSession() hook, this hook has the user session details

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	)
}

export default App
