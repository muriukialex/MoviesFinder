import styles from './styles.module.sass'
import cx from 'classnames'
import Link from 'next/link'
import { FiBookmark } from 'react-icons/fi'
import { SiImdb } from 'react-icons/si'
import { PopularMovieType, SeriesMovieType, TVshowsType } from '@/types'
import { imageURL } from '@/utils/constants/imageURL'

type MovieType = PopularMovieType | SeriesMovieType | TVshowsType

interface MovieCardProps {
	original_title?: string
	original_name?: string
	release_date?: string
	first_air_date?: string
	genre?: string
}

const MovieCard = ({
	original_title,
	original_name,
	release_date,
	first_air_date,
	vote_average,
	poster_path,
	id,
	genre,
}: MovieCardProps & MovieType) => {
	const isBookMarked = false
	const ImagePath = imageURL + poster_path
	const bookMarkStyle = cx(styles.MovieCard__Container__Details__MovieTitleHeading__icon, {
		[styles.MovieCard__Container__Details__MovieTitleHeading__icon__bookMarked]: isBookMarked,
	})

	return (
		<div className={styles.MovieCard__Container} style={{ backgroundImage: `url(${ImagePath})` }}>
			<div className={styles.MovieCard__Container__Details}>
				<div className={styles.MovieCard__Container__Details__MovieTitleHeading}>
					<h3 className={styles.MovieCard__Container__Details__MovieTitleHeading__title}>
						{original_title ? (
							<>
								{original_title?.substring(0, 20)}{' '}
								{original_title?.substring(0, 20)?.length !== original_title?.length && '...'}
							</>
						) : (
							<>
								{original_name?.substring(0, 20)}{' '}
								{original_name?.substring(0, 20)?.length !== original_name?.length && '...'}
							</>
						)}
					</h3>
					<div className={bookMarkStyle}>
						{isBookMarked && 'Bookmarked'}
						<FiBookmark size={32} color={isBookMarked ? '#FFD233' : '#FFF'} title='Bookmark this movie' />
					</div>
				</div>
				<div className={styles.MovieCard__Container__Details__ReleaseDate}>
					<span>{release_date ? release_date : first_air_date}</span>
				</div>
				<div className={styles.MovieCard__Container__Details__Rating}>
					<span className={styles.MovieCard__Container__Details__Rating__icon}>
						<SiImdb size={24} color='#FFD233' />
					</span>
					<span>{vote_average}</span>
				</div>
				<div className={styles.MovieCard__Container__Details__Action}>
					<button className={styles.MovieCard__Container__Details__Action__Btn}>
						<Link href={'/movie-details/' + id + (genre ? '?' + genre : '')}>View Details</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
