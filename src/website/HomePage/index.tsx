import { useMemo, useState } from 'react'
import styles from './styles.module.sass'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import PopularMovies from './PopularMovies'
import TVShows from './TVShows'
import SeriesMovies from './SeriesMovies'
import SearchResults from './SearchResults'

//types
import { ActiveSection, SearchMovieResultsType, APIResults } from '@/types'

const HomePage = () => {
	const [activeSection, setActiveSection] = useState<ActiveSection>('PopularMovies')
	const [searchMovieResults, setSearchMovieResults] = useState<APIResults<SearchMovieResultsType> | null>(null)
	const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(true)
	const title = useMemo(() => {
		switch (activeSection) {
			case 'PopularMovies':
				return 'Popular movies'
			case 'TVshows':
				return 'TV shows'
			case 'Series':
				return 'Series'
			case 'SearchResults':
				return 'Search results'
			default:
				return 'Popular movies'
		}
	}, [activeSection])

	return (
		<HomeLayout
			activeSection={activeSection}
			setActiveSection={setActiveSection}
			setSearchMovieResults={setSearchMovieResults}
			setIsSearchResultsLoading={setIsSearchResultsLoading}>
			<div className={styles.HomePageContainer}>
				<h2 className={styles.HomePageContainer__title}>{title}</h2>
				<section className={styles.HomePageContainer__MoviesSection}>
					{activeSection === 'PopularMovies' && <PopularMovies />}
					{activeSection === 'TVshows' && <TVShows activeSection={activeSection} />}
					{activeSection === 'Series' && <SeriesMovies activeSection={activeSection} />}
					{activeSection === 'SearchResults' && (
						<SearchResults searchMovieResults={searchMovieResults} isSearchResultsLoading={isSearchResultsLoading} />
					)}
				</section>
			</div>
		</HomeLayout>
	)
}

export default HomePage
