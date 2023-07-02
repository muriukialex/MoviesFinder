import { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.sass'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import PopularMovies from './PopularMovies'
import TVShows from './TVShows'
import SeriesMovies from './SeriesMovies'
import SearchResults from './SearchResults'

//types
import { ActiveSection, SearchMovieResultsType, APIResults } from '@/types'
import genres, { GenreType } from '@/utils/genres'
import defaultParams from '@/utils/constants/defaultParams'

const HomePage = () => {
	const [activeSection, setActiveSection] = useState<ActiveSection>('PopularMovies')
	const [searchMovieResults, setSearchMovieResults] = useState<APIResults<SearchMovieResultsType> | null>(null)
	const [movieGenres, setMovieGenres] = useState<Array<GenreType>>(genres)
	const [genreIDs, setGenreIDs] = useState<Array<number>>([])
	const [popularMoviesParams, updatePopularMoviesParams] = useState(defaultParams)
	const [seriesMoviesParams, updateSeriesMoviesParams] = useState(defaultParams)
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

	useEffect(() => {
		setGenreIDs([])
	}, [])

	useEffect(() => {
		const genresParams = { ['with_genres']: genreIDs.join(',') }
		updatePopularMoviesParams(prev => ({ ...prev, ...genresParams }))
		updateSeriesMoviesParams(prev => ({ ...prev, ...genresParams }))
	}, [genreIDs])

	return (
		<HomeLayout
			activeSection={activeSection}
			setActiveSection={setActiveSection}
			setSearchMovieResults={setSearchMovieResults}
			setIsSearchResultsLoading={setIsSearchResultsLoading}
			movieGenres={movieGenres}
			setMovieGenres={setMovieGenres}
			genreIDs={genreIDs}
			setGenreIDs={setGenreIDs}>
			<div className={styles.HomePageContainer} id='movie-results-section'>
				<h2 className={styles.HomePageContainer__title}>{title}</h2>
				<section className={styles.HomePageContainer__MoviesSection}>
					{activeSection === 'PopularMovies' && (
						<PopularMovies
							popularMoviesParams={popularMoviesParams}
							updatePopularMoviesParams={updatePopularMoviesParams}
						/>
					)}
					{activeSection === 'TVshows' && <TVShows activeSection={activeSection} />}
					{activeSection === 'Series' && (
						<SeriesMovies
							activeSection={activeSection}
							seriesMoviesParams={seriesMoviesParams}
							updateSeriesMoviesParams={updateSeriesMoviesParams}
						/>
					)}
					{activeSection === 'SearchResults' && (
						<SearchResults searchMovieResults={searchMovieResults} isSearchResultsLoading={isSearchResultsLoading} />
					)}
				</section>
			</div>
		</HomeLayout>
	)
}

export default HomePage
