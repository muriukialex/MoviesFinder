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
	if (searchMovieResults?.results.length === 0) {
		return <div>Oops! We couldn`t find any movies related to this search</div>
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
