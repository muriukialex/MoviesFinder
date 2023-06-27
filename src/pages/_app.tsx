import '@/styles/globals.sass'
import '@/styles/nprogress.sass'
import { SessionProvider } from 'next-auth/react'
import nProgress from 'nprogress'
import Router from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/Layout'

// types
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
// We are using the <SessionProvider> to enable use of the useSession() hook, this hook has the user session details

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const queryClient = new QueryClient()

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</QueryClientProvider>
	)
}

export default App
