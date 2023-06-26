import styles from './styles.module.sass'
import MenuLogos from '../MenuLogos/MenuLogos'
import Header from '../Header'
import HomeLayoutHeader from '../HomeLayoutHeader/HomeLayoutHeader'
import LineDivider from '../LineDivider/LineDivider'
import UserProfileSection from './UserProfileSection'
import MenuSection from './MenuSection'

interface HomeLayoutProps {
	children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
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
				<HomeLayoutHeader />
				<LineDivider />
				{children}
			</div>
			<div className={styles.HomeLayoutContainer__userProfile}>
				<UserProfileSection />
			</div>
		</div>
	)
}

export default HomeLayout
