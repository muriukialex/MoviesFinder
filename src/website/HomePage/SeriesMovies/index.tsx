import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchMovieSeries } from '@/utils/fetchMovieSeries'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { SeriesMovieType, ActiveSection } from '@/types'

interface SeriesMoviesProps {
	activeSection: ActiveSection
}

const SeriesMovies = ({ activeSection }: SeriesMoviesProps) => {
	const [seriesMoviesParams, updateSeriesMoviesParams] = useState(defaultParams)
	const {
		data: seriesMovies,
		isLoading,
		isError,
	} = useQuery('series movies', () => fetchMovieSeries({ params: seriesMoviesParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse />
	}
	const genre = activeSection === 'Series' ? 'series' : ''
	return (
		<>
			{seriesMovies?.results?.map((movie: SeriesMovieType) => (
				<MovieCard key={movie.id} genre={genre} {...movie} />
			))}
		</>
	)
}

export default SeriesMovies
