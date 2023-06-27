import fetcher from '../fetcher'

interface FetchMovieDetailsProps {
	movie_id: number | string
}

export const fetchMovieDetails = async ({ movie_id }: FetchMovieDetailsProps) => {
	return await fetcher({ path: 'movie/' + { movie_id } })
}
