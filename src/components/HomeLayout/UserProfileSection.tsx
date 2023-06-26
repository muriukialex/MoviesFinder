import styles from './userProfileSection.module.sass'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { BsPlus } from 'react-icons/bs'
import genres from '@/utils/genres'

const UserProfileSection = () => {
	const { data: session } = useSession()
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
					{genres.map(genre => (
						<div key={genre.title} className={styles.UserProfileSection__genresContainer__actions__actionBtn}>
							<span className={styles.UserProfileSection__genresContainer__actions__actionBtn__title}>
								{genre.title}
							</span>
							<span className={styles.UserProfileSection__genresContainer__actions__actionBtn__icon}>
								<BsPlus size={24} />
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default UserProfileSection
