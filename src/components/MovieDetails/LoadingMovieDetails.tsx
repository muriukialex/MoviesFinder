import LoadingScreen from '../Loading'
import styles from './loadingMovieDetails.module.sass'

const LoadingMovieDetails = () => {
	return (
		<div className={styles.LoadingMovieDetails}>
			<LoadingScreen width='100%' height='400px' variant='rect' />
			<div className={styles.LoadingMovieDetails__Details}>
				<div className={styles.LoadingMovieDetails__Details__Title}>
					<LoadingScreen width='75%' height='25px' variant='text' />
					<LoadingScreen width='10%' height='25px' variant='text' />
				</div>
				<div className={styles.LoadingMovieDetails__Details__ReleaseDate}>
					<LoadingScreen width='10%' height='25px' variant='text' />
				</div>
				<div className={styles.LoadingMovieDetails__Details__Rating}>
					<LoadingScreen width='30%' height='25px' variant='text' />
				</div>
				<div className={styles.LoadingMovieDetails__Details__SummaryPlot}>
					<LoadingScreen width='100%' height='90px' variant='text' />
				</div>
			</div>
		</div>
	)
}

export default LoadingMovieDetails
