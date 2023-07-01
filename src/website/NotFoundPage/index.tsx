import styles from './styles.module.sass'
import Link from 'next/link'
import HomeLayout from '@/components/HomeLayout/HomeLayout'
import ErrorResponse from '@/components/ErrorResponse'

const NotFoundPage = () => {
	return (
		<HomeLayout>
			<ErrorResponse message='Oops! Seems that this page is unavailable' />
			<div className={styles.NotFoundPage__message}>
				<Link href='/'>Go home</Link>
			</div>
		</HomeLayout>
	)
}

export default NotFoundPage
