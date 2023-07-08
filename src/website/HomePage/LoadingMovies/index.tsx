import styles from './styles.module.sass'
import LoadingScreen from '@/components/Loading'

const LoadingMoviesScreen = () => {
	return (
		<div className={styles.LoadingMoviesScreen__Container}>
			{new Array(10).fill(0).map((_, key) => (
				<div key={key}>
					<LoadingScreen width='300px' height='300px' variant='rect' />
				</div>
			))}
		</div>
	)
}

export default LoadingMoviesScreen
