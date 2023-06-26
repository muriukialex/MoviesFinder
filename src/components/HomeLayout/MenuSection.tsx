import styles from './menuSection.module.sass'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PiWarningCircle } from 'react-icons/pi'
import { IoHome } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import { FiBookmark } from 'react-icons/fi'
import { TbLogout2 } from 'react-icons/tb'
import LineDivider from '../LineDivider/LineDivider'

const MenuSection = () => {
	const router = useRouter()
	const handleLogout = () => {
		return signOut()
	}
	console.log('router: ', router)
	return (
		<section className={styles.MenuSection}>
			<MenuSectionHome />
			<LineDivider />
			<MenuSectionLibrary />
			<LineDivider />
			<Link href='/about' className={styles.MenuSection__about}>
				<span className={styles.MenuSection__about__icon}>
					<PiWarningCircle size={24} />
				</span>
				<span className={styles.MenuSection__about__text}>About</span>
			</Link>
			<div className={styles.MenuSection__LogoutContainer}>
				<span className={styles.MenuSection__LogoutContainer__icon}>
					<TbLogout2 size={24} color='#3F3F3F' />
				</span>
				<span className={styles.MenuSection__LogoutContainer__text} onClick={handleLogout} title='Logout'>
					Log out
				</span>
			</div>
		</section>
	)
}

const MenuSectionHome = () => {
	return (
		<div className={styles.MenuSection__home}>
			<div className={styles.MenuSection__home__title}>Menu</div>
			<div className={styles.MenuSection__home__subSection}>
				<Link href='/' className={styles.MenuSection__home__subSection__item}>
					<span className={styles.MenuSection__home__subSection__item__icon}>
						<IoHome size={24} />
					</span>
					<span className={styles.MenuSection__home__subSection__item__text}>Home</span>
				</Link>
			</div>
		</div>
	)
}

const MenuSectionLibrary = () => {
	return (
		<div className={styles.MenuSection__library}>
			<div className={styles.MenuSection__library__title}>Library</div>
			<div className={styles.MenuSection__library__subSection}>
				<Link href='/' className={styles.MenuSection__library__subSection__item}>
					<span className={styles.MenuSection__library__subSection__item__icon}>
						<BiTimeFive size={24} />
					</span>
					<span className={styles.MenuSection__library__subSection__item__text}>Recently viewed movies</span>
				</Link>
				<Link href='/' className={styles.MenuSection__library__subSection__item}>
					<span className={styles.MenuSection__library__subSection__item__icon}>
						<FiBookmark size={24} />
					</span>
					<span className={styles.MenuSection__library__subSection__item__text}>Bookmarked movies</span>
				</Link>
			</div>
		</div>
	)
}

export default MenuSection
