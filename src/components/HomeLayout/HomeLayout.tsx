import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.sass'
import MenuLogos from '../MenuLogos/MenuLogos'
import Header from '../Header'
import HomeLayoutHeader from '../HomeLayoutHeader/HomeLayoutHeader'
import LineDivider from '../LineDivider/LineDivider'
import UserProfileSection from './UserProfileSection'
import MenuSection from './MenuSection'

//types
import { ActiveSection } from '@/types'

interface HomeLayoutProps {
	children: React.ReactNode
	activeSection: ActiveSection
	setActiveSection: Dispatch<SetStateAction<ActiveSection>>
}

const HomeLayout = ({ children, activeSection, setActiveSection }: HomeLayoutProps) => {
	const router = useRouter()
	return (
		<div className={styles.HomeLayoutContainer}>
			<div className={styles.HomeLayoutContainer__menuLogos}>
				<MenuLogos />
			</div>
			<div className={styles.HomeLayoutContainer__menuSection}>
				<Header />
				<MenuSection />
			</div>
			<div className={styles.HomeLayoutContainer__mainDetails}>
				{router.pathname === '/' && (
					<>
						<HomeLayoutHeader activeSection={activeSection} setActiveSection={setActiveSection} />
						<LineDivider />
					</>
				)}
				{children}
			</div>
			<div className={styles.HomeLayoutContainer__userProfile}>
				<UserProfileSection />
			</div>
		</div>
	)
}

export default HomeLayout
