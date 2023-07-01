import styles from './styles.module.sass'
import { FiBookmark } from 'react-icons/fi'
import { SiImdb } from 'react-icons/si'
import cx from 'classnames'
import { MovieDetailsType, ImageDataType, SeriesAndTVshowDetailsType } from '@/types'
import { imageURL } from '@/utils/constants/imageURL'
import LoadingScreen from '../Loading'
import LoadingMovieDetails from './LoadingMovieDetails'
import ErrorResponse from '../ErrorResponse'

type MovieType = MovieDetailsType | SeriesAndTVshowDetailsType

type MovieDetailsProps = {
	isLoading: boolean
	imageLoading: boolean
	imageData?: ImageDataType
	isError: boolean
	imageLoadingError: boolean
	original_title?: string
	original_name?: string
	release_date?: string
	first_air_date?: string
	genre?: string
} & MovieType

const MovieDetails = ({
	poster_path,
	original_title,
	original_name,
	release_date,
	first_air_date,
	vote_average,
	overview,
	isLoading,
	imageLoading,
	isError,
	imageLoadingError,
	imageData,
}: MovieDetailsProps) => {
	const isBookMarked = false
	const movieDetailsPath = imageData?.posters[0]?.file_path
	const ImagePath = imageURL + (poster_path ? poster_path : movieDetailsPath)

	if (isLoading) {
		return <LoadingMovieDetails />
	}
	if (isError) {
		return <ErrorResponse message='Oops! There was an error loading data' />
	}

	const bookMarkStyle = cx(styles.MovieDetailsContainer__Details__MovieTitleHeading__icon, {
		[styles.MovieDetailsContainer__Details__MovieTitleHeading__icon__bookMarked]: isBookMarked,
	})

	return (
		<div className={styles.MovieDetailsContainer}>
			{imageLoading ? (
				<LoadingScreen width='100%' height='400px' variant='rect' />
			) : (
				<div
					className={styles.MovieDetailsContainer__Image}
					style={{ backgroundImage: imageLoadingError ? '#848484' : `url(${ImagePath})` }}
				/>
			)}
			<div className={styles.MovieDetailsContainer__Details}>
				<div className={styles.MovieDetailsContainer__Details__MovieTitleHeading}>
					<h3 className={styles.MovieDetailsContainer__Details__MovieTitleHeading__title}>
						{original_title ? original_title : original_name}
					</h3>
					<div className={bookMarkStyle}>
						{isBookMarked && 'Bookmarked'}
						<FiBookmark size={32} color={isBookMarked ? '#FFD233' : '#FFF'} title='Bookmark this movie' />
					</div>
				</div>
				<div className={styles.MovieDetailsContainer__Details__ReleaseDate}>
					<span>{release_date ? release_date : first_air_date}</span>
				</div>
				<div className={styles.MovieDetailsContainer__Details__Rating}>
					<span className={styles.MovieDetailsContainer__Details__Rating__icon}>
						<SiImdb size={24} color='#FFD233' />
					</span>
					<span>{vote_average}</span>
				</div>

				<div className={styles.MovieDetailsContainer__Details__SummaryPlot}>{overview}</div>
			</div>
		</div>
	)
}

export default MovieDetails
