import Image from 'next/image'
import styles from './styles.module.sass'
import NetflixLogo from '@/assets/netflix-logo.png'
import { SiHulu, SiAppletv } from 'react-icons/si'

const LogosMenu = () => {
	return (
		<section className={styles.MenuLogosContainer}>
			<div className={styles.MenuLogosContainer__netflixLogo}>
				<Image src={NetflixLogo} width={30} height={45} alt='netflix logo' />
			</div>
			<div className={styles.MenuLogosContainer__huluLogo}>
				<SiHulu size={35} />
			</div>
			<div className={styles.MenuLogosContainer__appleTV}>
				<SiAppletv size={30} />
			</div>
		</section>
	)
}

export default LogosMenu
