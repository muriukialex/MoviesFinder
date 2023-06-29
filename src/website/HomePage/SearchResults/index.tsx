import MovieCard from '@/components/MovieCard'

//types
import { SearchMovieResultsType, APIResults } from '@/types'

interface SearchResultsProps {
	searchMovieResults: APIResults<SearchMovieResultsType> | null
}

const SearchResults = ({ searchMovieResults }: SearchResultsProps) => {
	return (
		<>
			{searchMovieResults?.results?.map((movie: SearchMovieResultsType) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	)
}

export default SearchResults
