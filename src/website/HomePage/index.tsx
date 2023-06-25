import { signOut } from 'next-auth/react'

const HomePage = () => {
	return (
		<section>
			<div>
				<h1>Home Page</h1>
			</div>
			<div>
				<button onClick={() => signOut()}>Log out</button>
			</div>
		</section>
	)
}

export default HomePage
