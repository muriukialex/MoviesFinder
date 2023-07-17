import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import Header from '@/components/Header'
import styles from './styles.module.sass'
import LineDivider from '@/components/LineDivider/LineDivider'

//types
import { InputFormData } from '@/types/inputFormData'

const SignUpPage = () => {
	const router = useRouter()
	const [signUpState, setSignUpState] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputFormData>()
	const handleSignIn = () => {
		router.push('/auth/signin')
	}
	const handleSignUp = () => {
		router.push('/auth/signup')
	}

	const toggleSignUpState = () => {
		setSignUpState(!signUpState)
	}

	const toggleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleGoogleSignUp = () => {
		toggleSignUpState()
		return signIn('google')
	}
	const handleGithubLogin = () => {
		toggleSignUpState()
		return signIn('github')
	}

	const handleFormSubmit = (data: InputFormData) => {
		console.log('data: ', data)
	}

	return (
		<section className={styles.SignUpContainer}>
			<div className={styles.SignUpContainer__main}>
				<div className={styles.SignUpContainer__main__details}>
					<Header />
					<form className={styles.SignUpContainer__main__details__content} onSubmit={handleSubmit(handleFormSubmit)}>
						<h1>Sign Up</h1>
						<div className={styles.SignUpContainer__main__details__content__signUpOptions}>
							Sign up with{' '}
							<span
								className={styles.SignUpContainer__main__details__content__signUpOptions__provider}
								onClick={handleGoogleSignUp}>
								Google
							</span>{' '}
							or{' '}
							<span
								className={styles.SignUpContainer__main__details__content__signUpOptions__provider}
								onClick={handleGithubLogin}>
								Github
							</span>{' '}
							instead
						</div>

						<div className={styles.SignUpContainer__main__details__content__inputContainer}>
							<label htmlFor='username'>* Username</label>
							<input
								id='username'
								type='text'
								{...register('username', { required: true })}
								className={styles.SignUpContainer__main__details__content__inputContainer__input}
								disabled={signUpState}
								autoComplete='username'
								data-cy='username'
								placeholder='Enter a username'
							/>
							{errors.username && errors.username.type === 'required' && (
								<span className={styles.SignUpContainer__main__details__content__inputContainer__errorText}>
									The username is required
								</span>
							)}
						</div>

						<div className={styles.SignUpContainer__main__details__content__inputContainer}>
							<label htmlFor='email'>* Email address</label>
							<input
								id='email'
								type='email'
								{...register('email', { required: true })}
								className={styles.SignUpContainer__main__details__content__inputContainer__input}
								disabled={signUpState}
								autoComplete='username'
								data-cy='email-address'
								placeholder='Enter a email'
							/>
							{errors.email && errors.email.type === 'required' && (
								<span className={styles.SignUpContainer__main__details__content__inputContainer__errorText}>
									The email is required
								</span>
							)}
						</div>

						<div className={styles.SignUpContainer__main__details__content__inputContainer}>
							<label htmlFor='password'>* Password</label>
							<div>
								<input
									id='password'
									type={showPassword ? 'text' : 'password'}
									{...register('password', { required: true })}
									className={styles.SignUpContainer__main__details__content__inputContainer__input}
									disabled={signUpState}
									autoComplete='new-password'
									data-cy='password'
									placeholder='Enter a password'
								/>
								{showPassword ? (
									<RiEyeFill size={24} color='#000' onClick={toggleShowPassword} />
								) : (
									<RiEyeOffFill size={24} color='#000' onClick={toggleShowPassword} />
								)}
							</div>
							{errors.password && errors.password.type === 'required' && (
								<span className={styles.SignUpContainer__main__details__content__inputContainer__errorText}>
									The password is required
								</span>
							)}
						</div>

						<button
							className={styles.SignUpContainer__main__details__content__submit}
							onClick={handleSignUp}
							disabled={signUpState}
							data-cy='submit'>
							<span className={styles.SignUpContainer__main__details__content__providerContainer__email__text}>
								Sign Up
							</span>
						</button>
						<div className={styles.SignUpContainer__main__details__content__divider}>
							<LineDivider dividerText='OR' />
						</div>

						<div className={styles.SignUpContainer__main__details__content__dontHaveAccount}>
							Already have an account?
							<span
								className={styles.SignUpContainer__main__details__content__dontHaveAccount__action}
								onClick={handleSignIn}
								data-cy='dont-have-account-action'>
								Log In
							</span>
						</div>
					</form>
				</div>
				<div className={styles.SignUpContainer__main__image} />
			</div>
		</section>
	)
}

export default SignUpPage
