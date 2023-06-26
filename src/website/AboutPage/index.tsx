import styles from './styles.module.sass'
import details from './details'
import HomeLayout from '@/components/HomeLayout/HomeLayout'

const AboutPage = () => {
	return (
		<HomeLayout>
			<section className={styles.AboutPageContainer}>
				<div className={styles.AboutPageContainer__header}>
					<h1 className={styles.AboutPageContainer__header__title}> About Movies Finder</h1>
				</div>
				<div className={styles.AboutPageContainer__details}>
					{details.map(MoviesFinderDetail => (
						<div key={MoviesFinderDetail.title} className={styles.AboutPageContainer__details__container}>
							{MoviesFinderDetail.title} : {MoviesFinderDetail.description}
						</div>
					))}
				</div>
			</section>
		</HomeLayout>
	)
}

export default AboutPage
