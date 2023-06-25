import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Header from '@/components/Header'
import styles from './styles.module.sass'
import LineDivider from '@/components/LineDivider/LineDivider'
import GoogleImageIcon from '@/assets/google-icon.png'
import GithubImageIcon from '@/assets/github-mark.png'

const SignInPage = () => {
	const handleSignUp = () => {
		alert('Sign ups coming soon!')
	}
	const handleGoogleLogIn = () => {
		return signIn('google')
	}
	const handleGithubLogin = () => {
		return signIn('github')
	}
	return (
		<section className={styles.SignInContainer}>
			<div className={styles.SignInContainer__main}>
				<div className={styles.SignInContainer__main__details}>
					<Header />
					<div className={styles.SignInContainer__main__details__content}>
						<h1>Log In</h1>
						<div
							className={styles.SignInContainer__main__details__content__providerContainer}
							onClick={handleGoogleLogIn}>
							<span className={styles.SignInContainer__main__details__content__providerContainer__logo}>
								<Image src={GoogleImageIcon} width={32} height={32} alt='Google' />
							</span>
							<span className={styles.SignInContainer__main__details__content__providerContainer__text}>
								Log In With Google
							</span>
						</div>
						<div
							className={styles.SignInContainer__main__details__content__providerContainer}
							onClick={handleGithubLogin}>
							<span className={styles.SignInContainer__main__details__content__providerContainer__logo}>
								<Image src={GithubImageIcon} width={32} height={32} alt='Github' />
							</span>
							<span className={styles.SignInContainer__main__details__content__providerContainer__text}>
								Log In With Github
							</span>
						</div>
						<div className={styles.SignInContainer__main__details__content__divider}>
							<LineDivider dividerText='OR' />
						</div>

						<div className={styles.SignInContainer__main__details__content__dontHaveAccount}>
							Don’t have an account?
							<span
								className={styles.SignInContainer__main__details__content__dontHaveAccount__action}
								onClick={handleSignUp}>
								Sign Up
							</span>
						</div>
					</div>
				</div>
				<div className={styles.SignInContainer__main__image} />
			</div>
		</section>
	)
}

export default SignInPage
