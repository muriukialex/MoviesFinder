import Image from 'next/image'
import styles from './styles.module.sass'
import ErrorImage from '@/assets/ErrorImage.svg'

const ErrorResponse = () => {
	return (
		<div className={styles.ErrorResponse}>
			<Image src={ErrorImage} alt='Error response' width={400} height={400} />
			<div className={styles.ErrorResponse__text}>Oops! There was an error loading data</div>
		</div>
	)
}

export default ErrorResponse
