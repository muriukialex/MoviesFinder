import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchMovieSeries } from '@/utils/fetchMovieSeries'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { SeriesMovieType } from '@/types'

const SeriesMovies = () => {
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
	return (
		<>
			{seriesMovies?.results?.map((movie: SeriesMovieType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default SeriesMovies
