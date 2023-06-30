import { useState } from 'react'
import { useQuery } from 'react-query'
import defaultParams from '@/utils/constants/defaultParams'
import { fetchTVShows } from '@/utils/fetchTVShows'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { TVshowsType, ActiveSection } from '@/types'

interface TVShowsProps {
	activeSection: ActiveSection
}

const TVShows = ({ activeSection }: TVShowsProps) => {
	const [tvShowsParams, updateTVShowsParams] = useState(defaultParams)
	const { data: tvShows, isLoading, isError } = useQuery('tv shows', () => fetchTVShows({ params: tvShowsParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse />
	}
	const genre = activeSection === 'TVshows' ? 'tvShows' : ''
	return (
		<>
			{tvShows?.results?.map((movie: TVshowsType) => (
				<MovieCard key={movie.id} genre={genre} {...movie} />
			))}
		</>
	)
}

export default TVShows
