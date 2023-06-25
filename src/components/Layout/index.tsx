import { Nunito } from 'next/font/google'
import Header from '../Header'
import type { ReactNode } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<main className={`${nunito.className}`}>{children}</main>
		</>
	)
}

export default Layout
