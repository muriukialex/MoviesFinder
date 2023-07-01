import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchPopularMovies } from '@/utils/fetchPopularMovies'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { PopularMovieType } from '@/types'

const PopularMovies = () => {
	const [popularMoviesParams, updateMoviesParams] = useState(defaultParams)
	const {
		data: popularMovies,
		isLoading,
		isError,
	} = useQuery('popular movies', () => fetchPopularMovies({ params: popularMoviesParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse message='Oops! There was an error loading popular movies' />
	}
	return (
		<>
			{popularMovies?.results?.map((movie: PopularMovieType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default PopularMovies
