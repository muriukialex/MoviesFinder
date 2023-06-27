import { useMemo, useState } from 'react'
import styles from './styles.module.sass'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import PopularMovies from './PopularMovies'
import TVShows from './TVShows'
import SeriesMovies from './SeriesMovies'

//types
import { ActiveSection } from '@/types'

const HomePage = () => {
	const [activeSection, setActiveSection] = useState<ActiveSection>('PopularMovies')
	const title = useMemo(() => {
		switch (activeSection) {
			case 'PopularMovies':
				return 'Popular movies'
			case 'TVshows':
				return 'TV shows'
			case 'Series':
				return 'Series'
		}
	}, [activeSection])
	return (
		<HomeLayout activeSection={activeSection} setActiveSection={setActiveSection}>
			<div className={styles.HomePageContainer}>
				<h2 className={styles.HomePageContainer__title}>{title}</h2>
				<section className={styles.HomePageContainer__MoviesSection}>
					{activeSection === 'PopularMovies' && <PopularMovies />}
					{activeSection === 'TVshows' && <TVShows />}
					{activeSection === 'Series' && <SeriesMovies />}
				</section>
			</div>
		</HomeLayout>
	)
}

export default HomePage
