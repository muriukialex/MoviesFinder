import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Header from '@/components/Header'
import styles from './styles.module.sass'
import LineDivider from '@/components/LineDivider/LineDivider'
import GoogleImageIcon from '@/assets/google-icon.png'
import GithubImageIcon from '@/assets/github-mark.png'

const SignInPage = () => {
	const [loggedInState, setLoggedInState] = useState(false)
	const handleSignUp = () => {
		alert('Sign ups coming soon!')
	}

	const toggleLoggedInState = () => {
		setLoggedInState(!loggedInState)
	}

	const handleGoogleLogIn = () => {
		toggleLoggedInState()
		return signIn('google')
	}
	const handleGithubLogin = () => {
		toggleLoggedInState()
		return signIn('github')
	}
	return (
		<section className={styles.SignInContainer}>
			<div className={styles.SignInContainer__main}>
				<div className={styles.SignInContainer__main__details}>
					<Header />
					<div className={styles.SignInContainer__main__details__content}>
						<h1>Log In</h1>
						<button
							className={styles.SignInContainer__main__details__content__providerContainer}
							onClick={handleGoogleLogIn}
							disabled={loggedInState}
							data-cy='google-sign-in-btn'>
							<span className={styles.SignInContainer__main__details__content__providerContainer__logo}>
								<Image src={GoogleImageIcon} width={32} height={32} alt='Google' />
							</span>
							<span className={styles.SignInContainer__main__details__content__providerContainer__text}>
								Log In With Google
							</span>
						</button>
						<button
							className={styles.SignInContainer__main__details__content__providerContainer}
							onClick={handleGithubLogin}
							disabled={loggedInState}
							data-cy='github-sign-in-btn'>
							<span className={styles.SignInContainer__main__details__content__providerContainer__logo}>
								<Image src={GithubImageIcon} width={32} height={32} alt='Github' />
							</span>
							<span className={styles.SignInContainer__main__details__content__providerContainer__text}>
								Log In With Github
							</span>
						</button>
						<div className={styles.SignInContainer__main__details__content__divider}>
							<LineDivider dividerText='OR' />
						</div>

						<div className={styles.SignInContainer__main__details__content__dontHaveAccount}>
							Don’t have an account?
							<span
								className={styles.SignInContainer__main__details__content__dontHaveAccount__action}
								onClick={handleSignUp}
								data-cy='dont-have-account-action'>
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
