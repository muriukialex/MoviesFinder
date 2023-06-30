import { Dispatch, SetStateAction } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { searchMoviesByTerm } from '@/utils/searchMovie'
import defaultParams from '@/utils/constants/defaultParams'
import styles from './styles.module.sass'
import { BsSearch } from 'react-icons/bs'

//types
import { ActiveSection, SearchMovieResultsType, APIResults } from '@/types'

type SearchInputData = {
	searchText: string
}

interface HomeLayoutHeaderProps {
	activeSection?: ActiveSection
	setActiveSection?: Dispatch<SetStateAction<ActiveSection>>
	setSearchMovieResults?: Dispatch<SetStateAction<APIResults<SearchMovieResultsType> | null>>
	setIsSearchResultsLoading?: Dispatch<SetStateAction<boolean>>
}

const HomeLayoutHeader = ({
	activeSection,
	setActiveSection,
	setSearchMovieResults,
	setIsSearchResultsLoading,
}: HomeLayoutHeaderProps) => {
	const { handleSubmit, register } = useForm<SearchInputData>()

	const handleActiveSection = (section: ActiveSection) => {
		setActiveSection && setActiveSection(section)
	}

	const handleSearchSubmit: SubmitHandler<SearchInputData> = async data => {
		if (data.searchText.trim() === '') return
		const searchResults: APIResults<SearchMovieResultsType> = await searchMoviesByTerm({
			query: data.searchText,
			...defaultParams,
		})
		setSearchMovieResults && setSearchMovieResults(searchResults)
		setActiveSection && setActiveSection('SearchResults')
		setIsSearchResultsLoading && setIsSearchResultsLoading(false)
	}

	return (
		<section className={styles.HomeLayoutHeaderContainer}>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<div
					style={{ color: activeSection === 'PopularMovies' ? '#FFFFFF' : '#3F3F3F' }}
					onClick={() => handleActiveSection('PopularMovies')}>
					Movies
				</div>
			</div>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<div
					style={{ color: activeSection === 'Series' ? '#FFFFFF' : '#3F3F3F' }}
					onClick={() => handleActiveSection('Series')}>
					Series
				</div>
			</div>
			<div className={styles.HomeLayoutHeaderContainer__section}>
				<div
					style={{ color: activeSection === 'TVshows' ? '#FFFFFF' : '#3F3F3F' }}
					onClick={() => handleActiveSection('TVshows')}>
					TV Shows
				</div>
			</div>
			<form className={styles.HomeLayoutHeaderContainer__searchContainer} onSubmit={handleSubmit(handleSearchSubmit)}>
				<input
					{...register('searchText')}
					type='text'
					className={styles.HomeLayoutHeaderContainer__searchContainer__input}
					placeholder='Search movie'
					title='Search for a movie'
				/>
				<button type='submit' className={styles.HomeLayoutHeaderContainer__searchContainer__searchBtn}>
					<BsSearch size={24} color='#848484' />
				</button>
			</form>
		</section>
	)
}

export default HomeLayoutHeader
