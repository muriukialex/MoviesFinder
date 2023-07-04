import Image from 'next/image'
import styles from './styles.module.sass'
import ErrorImage from '@/assets/ErrorImage.svg'

interface ErrorResponseProps {
	message: string
}

const ErrorResponse = ({ message }: ErrorResponseProps) => {
	return (
		<div className={styles.ErrorResponse}>
			<Image className={styles.ErrorResponse__Image} src={ErrorImage} alt='Error response' width={400} height={400} />
			<div className={styles.ErrorResponse__text}>{message}</div>
		</div>
	)
}

export default ErrorResponse
