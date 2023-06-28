import fetcher from '../fetcher'

interface FetchMovieDetailsProps {
	movie_id: number | string | string[] | undefined
}

export const fetchMovieDetails = async ({ movie_id }: FetchMovieDetailsProps) => {
	console.log('fetch movie details ID', movie_id)
	return await fetcher({ path: 'movie/' + movie_id })
}

type fetchMovieImageProps = FetchMovieDetailsProps

export const fetchMovieImage = async ({ movie_id }: fetchMovieImageProps) => {
	return await fetcher({ path: 'movie/' + movie_id + '/images' })
}

// https://api.themoviedb.org/3/movie/{movie_id}/images
