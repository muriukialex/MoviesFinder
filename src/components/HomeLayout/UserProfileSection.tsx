import { Dispatch, SetStateAction } from 'react'
import cx from 'classnames'
import styles from './userProfileSection.module.sass'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { BsPlus, BsCheck } from 'react-icons/bs'
import { GenreType } from '@/utils/genres'

interface UserProfileSectionProps {
	movieGenres: GenreType[]
	setMovieGenres: Dispatch<SetStateAction<GenreType[]>>
	genreIDs?: number[]
	setGenreIDs?: Dispatch<SetStateAction<number[]>>
}

const UserProfileSection = ({ movieGenres, setMovieGenres, genreIDs, setGenreIDs }: UserProfileSectionProps) => {
	const { data: session } = useSession()

	const handleAddGenreSelection = (genreID: number) => {
		if (genreIDs?.includes(genreID)) {
			let updatedGenreIDs = genreIDs?.filter(id => id !== genreID)
			setGenreIDs && setGenreIDs(updatedGenreIDs)
		} else {
			setGenreIDs && setGenreIDs(prev => [...prev, genreID])
		}
		let updatedGenres = movieGenres?.map(genre => (genre.id === genreID ? { ...genre, selected: !genre.selected } : genre))
		setMovieGenres(updatedGenres)
	}

	const genreActionBtn = (genreSelected: boolean | undefined) => {
		return cx(styles.UserProfileSection__genresContainer__actions__actionBtn, {
			[styles.UserProfileSection__genresContainer__actions__actionBtn__active]: genreSelected,
		})
	}

	return (
		<section className={styles.UserProfileSection}>
			<div className={styles.UserProfileSection__profileContainer}>
				<div className={styles.UserProfileSection__profileContainer__image}>
					<Image src={`${session?.user?.image}`} width={50} height={50} alt={`${session?.user?.name} avatar`} />
				</div>
				<div className={styles.UserProfileSection__profileContainer__info}>
					<div className={styles.UserProfileSection__profileContainer__info__name}>{session?.user?.name}</div>
					<div className={styles.UserProfileSection__profileContainer__info__email}>{session?.user?.email}</div>
				</div>
			</div>
			<div className={styles.UserProfileSection__genresContainer}>
				<div className={styles.UserProfileSection__genresContainer__title}>
					<h3>Genre</h3>
				</div>
				<div className={styles.UserProfileSection__genresContainer__actions}>
					{movieGenres?.map(genre => (
						<div
							key={genre.title}
							className={genreActionBtn(genre.selected)}
							onClick={() => handleAddGenreSelection(genre.id)}>
							<span className={styles.UserProfileSection__genresContainer__actions__actionBtn__title}>
								{genre.title}
							</span>
							<span className={styles.UserProfileSection__genresContainer__actions__actionBtn__icon}>
								{genre.selected ? <BsCheck size={24} /> : <BsPlus size={24} />}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default UserProfileSection
