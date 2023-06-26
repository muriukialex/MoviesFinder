import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './styles.module.sass'
import Link from 'next/link'

type SearchInputData = {
	searchText: string
}

const HomeLayoutHeader = () => {
	const { handleSubmit, register } = useForm<SearchInputData>()

	const handleSearchSubmit: SubmitHandler<SearchInputData> = data => {
		console.log('data: ', data)
	}

	return (
		<section className={styles.HomeLayoutHeaderContainer}>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<Link href='/'>Movies</Link>
			</div>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<Link href='/'>Series</Link>
			</div>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<Link href='/'>TV Shows</Link>
			</div>
			<form className={styles.HomeLayoutHeaderContainer__searchContainer} onSubmit={handleSubmit(handleSearchSubmit)}>
				<input
					{...register('searchText')}
					className={styles.HomeLayoutHeaderContainer__searchContainer__input}
					placeholder='🔎  Search movie'
					title='CMD + K to search'
				/>
			</form>
		</section>
	)
}

export default HomeLayoutHeader
