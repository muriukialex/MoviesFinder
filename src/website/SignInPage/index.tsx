import Header from '@/components/Header'
import styles from './styles.module.sass'

const SignInPage = () => {
	return (
		<section className={styles.SignInContainer}>
			<div className={styles.SignInContainer__main}>
				<div className={styles.SignInContainer__main__details}>
					<Header />
					<div className={styles.SignInContainer__main__details__content}>
						<h1>Log In</h1>
						<div className={styles.SignInContainer__main__details__content__providerContainer}>
							Provide Your Login Credentials Provide Your Login Credentials
						</div>
						<div className={styles.SignInContainer__main__details__content__providerContainer}>
							Provide Your Login Credentials Provide Your Login Credentials
						</div>
					</div>
				</div>
				<div className={styles.SignInContainer__main__image} />
			</div>
		</section>
	)
}

export default SignInPage
