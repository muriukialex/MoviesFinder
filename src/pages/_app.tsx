import '@/styles/globals.sass'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/Layout'

import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
// We are using the <SessionProvider> for use to use the useSession() hook, this hook has the session object

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
