import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchPopularMovies } from '@/utils/fetchPopularMovies'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'
import PaginationComponent from '@/components/PaginationComponent'

//types
import { PopularMovieType } from '@/types'

const PopularMovies = () => {
	const [popularMoviesParams, updateMoviesParams] = useState(defaultParams)
	const {
		data: popularMovies,
		isLoading,
		isError,
	} = useQuery(['popular movies', popularMoviesParams], () => fetchPopularMovies({ params: popularMoviesParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse message='Oops! There was an error loading popular movies' />
	}
	const PopularMoviesResults = () => {
		return (
			<>
				{popularMovies?.results?.map((movie: PopularMovieType) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</>
		)
	}
	return (
		<>
			<PopularMoviesResults />
			<PaginationComponent params={popularMoviesParams} updateParams={updateMoviesParams} />
		</>
	)
}

export default PopularMovies
