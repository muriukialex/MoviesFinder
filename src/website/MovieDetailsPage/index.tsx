import styles from './styles.module.sass'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { fetchMovieDetails, fetchMovieImage } from '@/utils/fetchMovieDetails'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import MovieDetails from '@/components/MovieDetails'

const MovieDetailsPage = () => {
	const router = useRouter()
	const movie_id = router.query.id
	console.log('movie_id: ', movie_id)
	const { data: movieData, isLoading, isError } = useQuery('movie details', () => fetchMovieDetails({ movie_id: movie_id }))
	const {
		data: imageData,
		isLoading: imageLoading,
		isError: imageLoadingError,
	} = useQuery('movie image', () => fetchMovieImage({ movie_id: movie_id }))

	console.log('imageLoading: ', imageLoading)
	console.log('isLoading: ', isLoading)

	return (
		<HomeLayout>
			<div className={styles.MovieDetailsPageContainer}>
				<MovieDetails
					poster_path={movieData?.poster_path}
					original_title={movieData?.original_title}
					release_date={movieData?.release_date}
					vote_average={movieData?.vote_average}
					overview={movieData?.overview}
					imageData={imageData}
					imageLoading={imageLoading}
					isLoading={isLoading}
					{...movieData}
				/>
			</div>
		</HomeLayout>
	)
}

export default MovieDetailsPage
