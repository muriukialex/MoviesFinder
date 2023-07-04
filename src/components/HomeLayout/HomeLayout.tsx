import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiChevronLeftCircle } from 'react-icons/bi'
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
			<div className={styles.HomeLayoutContainer__Mobile}>
				<RxHamburgerMenu size={24} className={styles.HomeLayoutContainer__Mobile__OpenMenuIcon} />
				<BiChevronLeftCircle size={24} className={styles.HomeLayoutContainer__Mobile__OpenProfileIcon} />
			</div>
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

export default HomeLayout
