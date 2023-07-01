import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchTVShows } from '@/utils/fetchTVShows'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'
import PaginationComponent from '@/components/PaginationComponent'

//types
import { TVshowsType, ActiveSection } from '@/types'

interface TVShowsProps {
	activeSection: ActiveSection
}

const TVShows = ({ activeSection }: TVShowsProps) => {
	const [tvShowsParams, updateTVShowsParams] = useState(defaultParams)
	const {
		data: tvShows,
		isLoading,
		isError,
	} = useQuery(['tv shows', tvShowsParams], () => fetchTVShows({ params: tvShowsParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse message='Oops! There was an error loading TV shows' />
	}
	const genre = activeSection === 'TVshows' ? 'tvShows' : ''
	const TVShowsResults = () => {
		return (
			<>
				{tvShows?.results?.map((movie: TVshowsType) => (
					<MovieCard key={movie.id} genre={genre} {...movie} />
				))}
			</>
		)
	}

	return (
		<>
			<TVShowsResults />
			<PaginationComponent params={tvShowsParams} updateParams={updateTVShowsParams} />
		</>
	)
}

export default TVShows
