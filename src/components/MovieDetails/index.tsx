import styles from './styles.module.sass'
import { FiBookmark } from 'react-icons/fi'
import { SiImdb } from 'react-icons/si'
import cx from 'classnames'
import { MovieDetailsType, ImageDataType } from '@/types'
import { imageURL } from '@/utils/constants/imageURL'
import LoadingScreen from '../Loading'
import LoadingMovieDetails from './LoadingMovieDetails'

type MovieDetailsProps = { isLoading: boolean; imageLoading: boolean; imageData: ImageDataType } & MovieDetailsType

const MovieDetails = ({
	poster_path,
	original_title,
	release_date,
	vote_average,
	overview,
	isLoading,
	imageLoading,
	imageData,
}: MovieDetailsProps) => {
	const isBookMarked = false
	const movieDetailsPath = imageData?.posters[0]?.file_path
	const ImagePath = imageURL + (poster_path ? poster_path : movieDetailsPath)

	if (isLoading) {
		return <LoadingMovieDetails />
	}

	const bookMarkStyle = cx(styles.MovieDetailsContainer__Details__MovieTitleHeading__icon, {
		[styles.MovieDetailsContainer__Details__MovieTitleHeading__icon__bookMarked]: isBookMarked,
	})
	console.log('imageLoading: ', imageLoading)
	return (
		<div className={styles.MovieDetailsContainer}>
			<div className={styles.MovieDetailsContainer__Image} style={{ backgroundImage: `url(${ImagePath})` }} />
			<div className={styles.MovieDetailsContainer__Details}>
				<div className={styles.MovieDetailsContainer__Details__MovieTitleHeading}>
					<h3 className={styles.MovieDetailsContainer__Details__MovieTitleHeading__title}>{original_title}</h3>
					<div className={bookMarkStyle}>
						{isBookMarked && 'Bookmarked'}
						<FiBookmark size={32} color={isBookMarked ? '#FFD233' : '#FFF'} title='Bookmark this movie' />
					</div>
				</div>
				<div className={styles.MovieDetailsContainer__Details__ReleaseDate}>
					<span>{release_date}</span>
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
