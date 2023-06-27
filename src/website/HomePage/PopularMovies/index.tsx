import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchPopularMovies } from '@/utils/fetchPopularMovies'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { MovieDataType } from '@/types'

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
		return <ErrorResponse />
	}
	return (
		<>
			{popularMovies?.results?.map((movie: MovieDataType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default PopularMovies
