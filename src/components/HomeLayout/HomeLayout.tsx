import React, { useState, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiChevronLeftCircle } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import styles from './styles.module.sass'
import MenuLogos from '../MenuLogos/MenuLogos'
import Header from '../Header'
import HomeLayoutHeader from '../HomeLayoutHeader/HomeLayoutHeader'
import LineDivider from '../LineDivider/LineDivider'
import UserProfileSection from './UserProfileSection'
import MenuSection from './MenuSection'

//types
import { ActiveSection, SearchMovieResultsType, APIResults } from '@/types'
import { GenreType } from '@/utils/genres'

interface HomeLayoutProps {
	children: React.ReactNode
	activeSection?: ActiveSection
	setActiveSection?: Dispatch<SetStateAction<ActiveSection>>
	setSearchMovieResults?: Dispatch<SetStateAction<APIResults<SearchMovieResultsType> | null>>
	setIsSearchResultsLoading?: Dispatch<SetStateAction<boolean>>
	movieGenres?: GenreType[]
	setMovieGenres?: Dispatch<SetStateAction<GenreType[]>>
	genreIDs?: number[]
	setGenreIDs?: Dispatch<SetStateAction<number[]>>
}

const HomeLayout = ({
	children,
	activeSection,
	setActiveSection,
	setSearchMovieResults,
	setIsSearchResultsLoading,
	movieGenres,
	setMovieGenres,
	genreIDs,
	setGenreIDs,
}: HomeLayoutProps) => {
	const router = useRouter()
	return (
		<div className={styles.HomeLayoutContainer}>
			<HomeLayoutMobileView
				movieGenres={movieGenres}
				setMovieGenres={setMovieGenres}
				genreIDs={genreIDs}
				setGenreIDs={setGenreIDs}
			/>
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
						<HomeLayoutHeader
							activeSection={activeSection}
							setActiveSection={setActiveSection}
							setSearchMovieResults={setSearchMovieResults}
							setIsSearchResultsLoading={setIsSearchResultsLoading}
						/>
						<LineDivider />
					</>
				)}
				{children}
			</div>
			<div className={styles.HomeLayoutContainer__userProfile}>
				{movieGenres && setMovieGenres && (
					<UserProfileSection
						movieGenres={movieGenres}
						setMovieGenres={setMovieGenres}
						genreIDs={genreIDs}
						setGenreIDs={setGenreIDs}
					/>
				)}
			</div>
		</div>
	)
}

interface HomeLayoutMobileViewProps {
	movieGenres?: GenreType[]
	setMovieGenres?: React.Dispatch<React.SetStateAction<GenreType[]>>
	genreIDs?: number[]
	setGenreIDs?: Dispatch<SetStateAction<number[]>>
}

const HomeLayoutMobileView = ({ movieGenres, setMovieGenres, genreIDs, setGenreIDs }: HomeLayoutMobileViewProps) => {
	const [showMenu, setShowMenu] = useState(false)
	const [showProfileSection, setShowProfileSection] = useState(false)

	const scrollToTop = () => {
		return window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
	const handleShowMenu = () => {
		setShowMenu(!showMenu)
		scrollToTop()
	}

	const handleShowProfileSection = () => {
		setShowProfileSection(!showProfileSection)
	}

	const CloseMenuIcon = () => {
		return (
			<div className={styles.closeMenuIcon}>
				<RxCross2 size={24} onClick={handleShowMenu} />
			</div>
		)
	}
	const CloseMenuProfileIcon = () => {
		return (
			<div className={styles.closeMenuProfileIcon}>
				<RxCross2 size={24} onClick={handleShowProfileSection} />
			</div>
		)
	}

	return (
		<>
			<div className={styles.HomeLayoutContainer__Mobile}>
				<RxHamburgerMenu
					size={24}
					onClick={handleShowMenu}
					className={styles.HomeLayoutContainer__Mobile__OpenMenuIcon}
				/>
				<BiChevronLeftCircle
					size={24}
					onClick={handleShowProfileSection}
					className={styles.HomeLayoutContainer__Mobile__OpenProfileIcon}
				/>
				{showMenu && (
					<div id='left-side-menu' className={styles.overlay}>
						<CloseMenuIcon />
						<div className={styles.HomeLayoutContainer__menuLogos__mobile}>
							<MenuLogos />
						</div>
						<div className={styles.HomeLayoutContainer__menuSection__mobile}>
							<Header />
							<MenuSection />
						</div>
					</div>
				)}
				{showProfileSection && (
					<div className={styles.overlay__userProfileSections}>
						<CloseMenuProfileIcon />
						{movieGenres && setMovieGenres && (
							<UserProfileSection
								movieGenres={movieGenres}
								setMovieGenres={setMovieGenres}
								genreIDs={genreIDs}
								setGenreIDs={setGenreIDs}
								showProfileSection={showProfileSection}
								setShowProfileSection={setShowProfileSection}
							/>
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default HomeLayout
