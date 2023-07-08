import styles from './menuSection.module.sass'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import cx from 'classnames'
import useActivePath from '@/hooks/useActivePath'
import { LuInfo } from 'react-icons/lu'
import { IoHome } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import { FiBookmark } from 'react-icons/fi'
import { TbLogout2 } from 'react-icons/tb'
import LineDivider from '../LineDivider/LineDivider'

const MenuSection = () => {
	const handleLogout = () => {
		return signOut()
	}

	return (
		<section className={styles.MenuSection}>
			<MenuSectionHome />
			<LineDivider />
			<MenuSectionLibrary />
			<LineDivider />
			<Link
				href='/about'
				className={cx(styles.MenuSection__about, { [styles.MenuSection__about__isActive]: useActivePath('/about') })}>
				<span className={styles.MenuSection__about__icon}>
					<LuInfo size={24} />
				</span>
				<span className={styles.MenuSection__about__text}>About</span>
			</Link>
			<div className={styles.MenuSection__LogoutContainer}>
				<span className={styles.MenuSection__LogoutContainer__icon}>
					<TbLogout2 size={24} color='#848484' />
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
				<Link
					href='/'
					className={cx(styles.MenuSection__home__subSection__item, {
						[styles.MenuSection__home__subSection__item__isActive]: useActivePath('/'),
					})}>
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
				<Link
					href='/recently-viewed-movies'
					className={cx(styles.MenuSection__library__subSection__item, {
						[styles.MenuSection__library__subSection__item__isActive]: useActivePath('/recently-viewed-movies'),
					})}>
					<span className={styles.MenuSection__library__subSection__item__icon}>
						<BiTimeFive size={24} />
					</span>
					<span className={styles.MenuSection__library__subSection__item__text}>Recently viewed movies</span>
				</Link>
				<Link
					href='/bookmarked-movies'
					className={cx(styles.MenuSection__library__subSection__item, {
						[styles.MenuSection__library__subSection__item__isActive]: useActivePath('/bookmarked-movies'),
					})}>
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
