import MovieCard from '@/components/MovieCard'
import LoadingMoviesScreen from '../LoadingMovies'

//types
import { SearchMovieResultsType, APIResults } from '@/types'

interface SearchResultsProps {
	searchMovieResults: APIResults<SearchMovieResultsType> | null
	isSearchResultsLoading?: boolean
}

const SearchResults = ({ searchMovieResults, isSearchResultsLoading }: SearchResultsProps) => {
	if (isSearchResultsLoading) {
		return <LoadingMoviesScreen />
	}
	return (
		<>
			{searchMovieResults?.results?.map((movie: SearchMovieResultsType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default SearchResults
