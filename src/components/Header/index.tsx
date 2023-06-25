import styles from './styles.module.sass'
import { BiMoviePlay } from 'react-icons/bi'

const Header = () => {
	return (
		<nav className={styles.header}>
			<div className={styles.header__title}>
				<span className={styles.header__title__logo}>
					<BiMoviePlay size={32} />
				</span>
				<span className={styles.header__title__text}>Movies Finder</span>
			</div>
		</nav>
	)
}

export default Header
