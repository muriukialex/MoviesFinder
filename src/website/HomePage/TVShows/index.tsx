import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchTVShows } from '@/utils/fetchTVShows'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { TVshowsType } from '@/types'

const TVShows = () => {
	const [tvShowsParams, updateTVShowsParams] = useState(defaultParams)
	const { data: tvShows, isLoading, isError } = useQuery('tv shows', () => fetchTVShows({ params: tvShowsParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse />
	}
	return (
		<>
			{tvShows?.results?.map((movie: TVshowsType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default TVShows
