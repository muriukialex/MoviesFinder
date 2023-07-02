import { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { fetchPopularMovies } from '@/utils/fetchPopularMovies'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'
import PaginationComponent from '@/components/PaginationComponent'

//types
import { PopularMovieType, DefaultParamsType } from '@/types'

interface PopularMoviesProps {
	popularMoviesParams: DefaultParamsType
	updatePopularMoviesParams: Dispatch<SetStateAction<DefaultParamsType>>
}

const PopularMovies = ({ popularMoviesParams, updatePopularMoviesParams }: PopularMoviesProps) => {
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
			<PaginationComponent params={popularMoviesParams} updateParams={updatePopularMoviesParams} />
		</>
	)
}

export default PopularMovies
