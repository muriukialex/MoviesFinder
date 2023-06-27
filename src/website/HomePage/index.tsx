import styles from './styles.module.sass'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import PopularMovies from './PopularMovies'

const HomePage = () => {
	return (
		<HomeLayout>
			<div className={styles.HomePageContainer}>
				<h2 className={styles.HomePageContainer__title}>Popular movies</h2>
				{/*section selected for popular movies*/}
				<section className={styles.HomePageContainer__MoviesSection}>
					<PopularMovies />
				</section>
			</div>
		</HomeLayout>
	)
}

export default HomePage
