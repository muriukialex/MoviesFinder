import styles from './styles.module.sass'
import { Dispatch, SetStateAction } from 'react'
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl'

//types
import { DefaultParamsType } from '@/types'

interface PaginationComponentProps {
	params: DefaultParamsType
	updateParams: Dispatch<SetStateAction<DefaultParamsType>>
}

const PaginationComponent = ({ params, updateParams }: PaginationComponentProps) => {
	const scrollToTopSection = () => {
		const section = document.getElementById('movie-results-section')
		return section?.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
	const handleGoToNextPage = (updateParamsAction: Dispatch<SetStateAction<DefaultParamsType>>) => {
		const nextPage = params.page + 1
		updateParamsAction({ ...params, page: nextPage })

		scrollToTopSection()
	}
	const handleGoToPrevPage = (updateParamsAction: Dispatch<SetStateAction<DefaultParamsType>>) => {
		if (params.page > 1) {
			const prevPage = params.page - 1
			updateParamsAction({ ...params, page: prevPage })

			scrollToTopSection()
		}
	}

	return (
		<div className={styles.PaginationComponent}>
			<div className={styles.PaginationComponent__Actions}>
				<SlArrowLeftCircle
					onClick={() => handleGoToPrevPage(updateParams)}
					size={24}
					color={params.page === 1 ? '#848484' : '#fff'}
				/>
				<SlArrowRightCircle onClick={() => handleGoToNextPage(updateParams)} size={24} />
			</div>
		</div>
	)
}

export default PaginationComponent
