import { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { fetchMovieSeries } from '@/utils/fetchMovieSeries'
import MovieCard from '@/components/MovieCard'
import ErrorResponse from '@/components/ErrorResponse'
import LoadingMoviesScreen from '../LoadingMovies'
import PaginationComponent from '@/components/PaginationComponent'

//types
import { SeriesMovieType, ActiveSection, DefaultParamsType } from '@/types'

interface SeriesMoviesProps {
	activeSection: ActiveSection
	seriesMoviesParams: DefaultParamsType
	updateSeriesMoviesParams: Dispatch<SetStateAction<DefaultParamsType>>
}

const SeriesMovies = ({ activeSection, seriesMoviesParams, updateSeriesMoviesParams }: SeriesMoviesProps) => {
	const {
		data: seriesMovies,
		isLoading,
		isError,
	} = useQuery(['series movies', seriesMoviesParams], () => fetchMovieSeries({ params: seriesMoviesParams }))

	if (isLoading) {
		return <LoadingMoviesScreen />
	}

	if (isError) {
		return <ErrorResponse message='Oops! There was an error loading the movie series' />
	}
	const genre = activeSection === 'Series' ? 'series' : ''
	const SeriesMoviesResults = () => {
		return (
			<>
				{seriesMovies?.results?.map((movie: SeriesMovieType) => (
					<MovieCard key={movie.id} genre={genre} {...movie} />
				))}
			</>
		)
	}

	return (
		<>
			<SeriesMoviesResults />
			<PaginationComponent params={seriesMoviesParams} updateParams={updateSeriesMoviesParams} />
		</>
	)
}

export default SeriesMovies
