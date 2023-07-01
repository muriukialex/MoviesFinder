import { useMemo } from 'react'
import styles from './styles.module.sass'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { fetchMovieDetails, fetchMovieImage, fetchSeriesAndTVshowImages } from '@/utils/fetchMovieDetails'
import { fetchSeriesAndTvShowDetails } from '@/utils/fetchMovieSeriesDetails'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import MovieDetails from '@/components/MovieDetails'
import LoadingMovieDetails from '@/components/MovieDetails/LoadingMovieDetails'

const MovieDetailsPage = () => {
	const router = useRouter()
	const movie_id = router.query.id
	const genre = (router.query.series === '' ? 'series' : '') || (router.query.tvShows === '' ? 'tvShows' : '')
	const fetchDetails = useMemo(() => {
		switch (genre) {
			case 'series':
				return fetchSeriesAndTvShowDetails({ id: movie_id })
			case 'tvShows':
				return fetchSeriesAndTvShowDetails({ id: movie_id })
			default:
				return fetchMovieDetails({ movie_id: movie_id })
		}
	}, [genre, movie_id])

	const { data: movieData, isLoading, isError } = useQuery('movie details', () => fetchDetails)

	const fetchImages = useMemo(() => {
		switch (genre) {
			case 'series':
				return fetchSeriesAndTVshowImages({ id: movie_id })
			case 'tvShows':
				return fetchSeriesAndTVshowImages({ id: movie_id })
			default:
				return fetchMovieImage({ movie_id: movie_id })
		}
	}, [genre, movie_id])

	const { data: imageData, isLoading: imageLoading, isError: imageLoadingError } = useQuery('movie image', () => fetchImages)

	return (
		<HomeLayout>
			<div className={styles.MovieDetailsPageContainer}>
				{movieData ? (
					<MovieDetails
						poster_path={movieData.poster_path}
						original_title={movieData.original_title}
						original_name={movieData.original_name}
						release_date={movieData.release_date}
						first_air_date={movieData.first_air_date}
						vote_average={movieData.vote_average}
						overview={movieData.overview}
						imageData={imageData}
						imageLoading={imageLoading}
						isLoading={isLoading}
						isError={isError}
						imageLoadingError={imageLoadingError}
					/>
				) : (
					<LoadingMovieDetails />
				)}
			</div>
		</HomeLayout>
	)
}

export default MovieDetailsPage
